import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white/97 backdrop-blur-md border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight hover:opacity-80 transition-opacity">
              DAHAR ENGINEERING
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-sm ${
                    location === link.href
                      ? "text-primary"
                      : "text-gray-500 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-primary/85 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 rounded-sm hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white text-sm font-bold rounded-sm hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
