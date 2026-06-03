import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import appCss from "../styles.css?url";
import logoUrl from "@/assets/tvk-logo.webp";
import { CommonSections } from "@/components/CommonSections";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleLang = () => setLang(lang === "EN" ? "TA" : "EN");

  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/complaint", label: "Complaint Status" },
    { to: "/women", label: "For Women" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoUrl} alt="TVK Logo" className="h-12 w-auto rounded-md object-cover" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-secondary tracking-tight">Tamilaga Vettri Kazhagam</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-colors"
            >
              {lang === "EN" ? "தமிழ்" : "English"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLang}
              className="px-2 py-1 mr-4 rounded border-2 border-secondary text-secondary font-bold text-xs hover:bg-secondary hover:text-white transition-colors"
            >
              {lang === "EN" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-secondary/80"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 rounded-md text-base font-semibold text-secondary hover:bg-secondary/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoUrl} alt="TVK Logo" className="h-10 w-auto rounded-full bg-white p-1" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">TVK</span>
                <span className="text-sm font-tamil">தமிழக வெற்றி கழகம்</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Building a New Tamil Nadu — For the People, By the People.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm text-white/80">
              <Link to="/#about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/#schemes" className="hover:text-primary transition-colors">Key Initiatives</Link>
              <Link to="/complaint" className="hover:text-primary transition-colors">Complaint Status</Link>
              <a href="#" className="hover:text-primary transition-colors">Volunteer</a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">Contact Info</h3>
            <p className="text-sm text-white/80">
              Headquarters, Chennai<br />
              Tamil Nadu, India
            </p>
            <p className="text-sm text-white/80">
              Helpline: 1800-XXX-XXXX<br />
              Email: contact@tvk.org.in
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-primary transition-colors">𝕏</a>
              <a href="#" className="text-white hover:text-primary transition-colors">FB</a>
              <a href="#" className="text-white hover:text-primary transition-colors">YT</a>
              <a href="#" className="text-white hover:text-primary transition-colors">IG</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© 2025 Tamilaga Vettri Kazhagam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-secondary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-secondary transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-secondary transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TVK | Tamilaga Vettri Kazhagam" },
      { name: "description", content: "Building a New Tamil Nadu — For the People, By the People" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23FFD700%22/></svg>",
      }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CommonSections />
      <Footer />
    </QueryClientProvider>
  );
}
