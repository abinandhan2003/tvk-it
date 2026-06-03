// scripts/vercel-build.mjs
// Post-build script: assembles Vercel Build Output API structure from TanStack Start's
// dist/client (static assets) and dist/server (Node.js serverless function handler).
import { mkdirSync, cpSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, ".vercel", "output");

// Clean slate
if (existsSync(OUT)) {
  rmSync(OUT, { recursive: true, force: true });
}
mkdirSync(join(OUT, "static"), { recursive: true });
mkdirSync(join(OUT, "functions", "__handler.func"), { recursive: true });

// 1. config.json — global routing
writeFileSync(
  join(OUT, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Serve static assets from dist/client first
        { handle: "filesystem" },
        // Everything else → serverless function (SSR)
        { src: "/(.*)", dest: "/__handler" },
      ],
    },
    null,
    2,
  ),
);

// 2. Copy dist/client → .vercel/output/static
cpSync(join(ROOT, "dist", "client"), join(OUT, "static"), { recursive: true });

// 3. Create the serverless function from dist/server
const funcDir = join(OUT, "functions", "__handler.func");

// Copy all server build output
cpSync(join(ROOT, "dist", "server"), funcDir, { recursive: true });

// Create a Node.js adapter entry that converts Node HTTP req/res ↔ Web API fetch
const adapterCode = `
import server from "./server.js";

export default async function handler(req, res) {
  try {
    // Build a Web API Request from Node's IncomingMessage
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = new URL(req.url || "/", protocol + "://" + host);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
    }

    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const webRequest = new Request(url.toString(), {
      method: req.method,
      headers,
      body: hasBody ? req : undefined,
      duplex: hasBody ? "half" : undefined,
    });

    // Call the TanStack Start server handler
    const webResponse = await server.fetch(webRequest, {}, {});

    // Write the Web API Response back to Node's ServerResponse
    res.statusCode = webResponse.status;
    for (const [key, value] of webResponse.headers.entries()) {
      res.setHeader(key, value);
    }

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error("SSR handler error:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("<h1>Internal Server Error</h1>");
  }
}
`;

writeFileSync(join(funcDir, "index.mjs"), adapterCode);

// Write the .vc-config.json for a Node.js serverless function
writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
    },
    null,
    2,
  ),
);

console.log("✅ Vercel Build Output assembled at .vercel/output");
