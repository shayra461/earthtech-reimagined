import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "The System", path: "/the-system" },
  { label: "Gallery", path: "/gallery" },
  { label: "Team", path: "/team" },
  { label: "Installation", path: "/installation" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Only the home page has a dark hero; all other pages need solid navbar immediately
  const isHome = location.pathname === "/";
  const solidNav = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidNav
          ? "bg-card/95 backdrop-blur-2xl border-b border-border/40"
          : "bg-transparent"
      }`}
      style={{ boxShadow: solidNav ? "var(--shadow-sm)" : "none" }}
    >
      <nav className="container-full mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="Healing Earth Technologies" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? solidNav ? "text-primary bg-primary/5" : "text-primary-foreground bg-primary-foreground/10"
                  : solidNav ? "text-muted-foreground hover:text-foreground hover:bg-muted/50" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${solidNav ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-2xl border-t border-border/40 animate-fade-up">
          <div className="px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
