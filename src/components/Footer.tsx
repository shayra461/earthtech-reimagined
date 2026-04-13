import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "The System", path: "/the-system" },
  { label: "Gallery", path: "/gallery" },
  { label: "Team", path: "/team" },
  { label: "Installation", path: "/installation" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container-full mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center">
              <img src={logo} alt="Healing Earth Technologies" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "hsl(var(--section-dark-foreground) / 0.6)" }}>
              Revolutionizing agriculture with the Ultimate Food System™ — sustainable, organic, and efficient food production for a better future.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(var(--section-dark-foreground) / 0.4)" }}>Navigation</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.slice(0, 4).map((link) => (
                <Link key={link.path} to={link.path} className="text-sm transition-colors hover:opacity-100" style={{ color: "hsl(var(--section-dark-foreground) / 0.65)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(var(--section-dark-foreground) / 0.4)" }}>More</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.slice(4).map((link) => (
                <Link key={link.path} to={link.path} className="text-sm transition-colors hover:opacity-100" style={{ color: "hsl(var(--section-dark-foreground) / 0.65)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(var(--section-dark-foreground) / 0.4)" }}>Get In Touch</h4>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--section-dark-foreground) / 0.6)" }}>
              Interested in the Ultimate Food System™ or investing? Equity positions are available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "hsl(var(--section-dark-foreground) / 0.1)" }}>
          <p className="text-xs" style={{ color: "hsl(var(--section-dark-foreground) / 0.35)" }}>
            © {new Date().getFullYear()} Healing Earth Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "hsl(var(--section-dark-foreground) / 0.35)" }}>
            Ultimate Food System™ is a trademark of Healing Earth Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
