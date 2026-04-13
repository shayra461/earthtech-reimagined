import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-base leading-tight">
                  Healing Earth
                </span>
                <span className="text-background/60 text-xs tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Revolutionizing agriculture with the Ultimate Food System™ — 
              sustainable, organic, and efficient food production for a better future.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-background/40">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-background/40">
              Get In Touch
            </h4>
            <p className="text-sm text-background/70 leading-relaxed">
              Interested in the Ultimate Food System™ or investing in Healing Earth Technologies? 
              Equity positions are available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Healing Earth Technologies. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Ultimate Food System™ is a trademark of Healing Earth Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
