import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = "w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/50";

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="badge-premium mb-4 inline-block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Let's work together.
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in learning more about owning an Ultimate Food System™ or investing in Healing Earth Technologies? Equity positions are available.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-20">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Get in touch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fill out this Contact Form and click on the Submit button. We'll be in touch soon!
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: "Email", value: "info@healingearthtech.com" },
                    { icon: <MapPin size={18} />, label: "Location", value: "United States" },
                    { icon: <Phone size={18} />, label: "Inquiries", value: "Investment & Ownership" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-3">
              {submitted ? (
                <div className="card-premium p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-6">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">Thank you!</h3>
                  <p className="text-muted-foreground">Your message has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-8 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClasses} resize-none`} />
                  </div>
                  <button type="submit" className="w-full rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
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
