import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs tracking-widest uppercase text-primary font-semibold">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Let's work together.
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in learning more about owning an Ultimate Food System™ or investing 
              in Healing Earth Technologies? Equity positions are available.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Get in touch
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fill out the contact form and click Submit. We'll be in touch soon!
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">info@healingearthtech.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">United States</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Inquiries</div>
                      <div className="text-sm text-muted-foreground">Investment & Ownership</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={150} className="lg:col-span-3">
              {submitted ? (
                <div className="card-elevated p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    Thank you!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  >
                    Submit
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
