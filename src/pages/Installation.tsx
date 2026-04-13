import ScrollReveal from "@/components/ScrollReveal";
import { Settings, Warehouse, Tractor, Cpu } from "lucide-react";
import img1 from "@/assets/installation/install-1.jpg";
import img2 from "@/assets/installation/install-2.jpg";
import img3 from "@/assets/installation/install-3.jpg";
import img4 from "@/assets/installation/install-4.jpg";
import img5 from "@/assets/installation/install-5.jpg";
import img6 from "@/assets/installation/install-6.jpg";
import img7 from "@/assets/installation/install-7.jpg";
import jimImg from "@/assets/installation/jim-headshot.jpg";

const capabilities = [
  { icon: <Tractor size={22} />, text: "Feed livestock herds from 10 to 10,000 head" },
  { icon: <Warehouse size={22} />, text: "Urban Farm installations scaled to market size and demand" },
  { icon: <Settings size={22} />, text: "Installation in suitable existing buildings or purpose-built structures" },
  { icon: <Cpu size={22} />, text: "Manually operated or automatic systems available" },
];

const photos = [
  { src: img1, alt: "Installation beginning" },
  { src: img2, alt: "Assembly in progress" },
  { src: img3, alt: "System components" },
  { src: img4, alt: "Conveyor setup" },
  { src: img5, alt: "System installed" },
  { src: img6, alt: "Completed installation" },
  { src: img7, alt: "Final system running" },
];

const Installation = () => (
  <div className="min-h-screen pt-20">
    {/* Header */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-premium mb-4 inline-block">Installation</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
              Modular Manufacturing Means Easy Installation
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="card-premium p-8 lg:p-12 mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
              The Ultimate Food System ™ can be configured to meet your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary">
                    {cap.icon}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Photo subtitle */}
        <ScrollReveal delay={150}>
          <div className="text-center mb-10">
            <p className="text-muted-foreground text-sm italic">
              Pictured below is the installation of a 40' manual system on a Colorado cattle ranch
            </p>
          </div>
        </ScrollReveal>

        {/* Photo grid with Jim headshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ScrollReveal delay={0}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
              <img src={photos[0].src} alt={photos[0].alt} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
              <img src={jimImg} alt="Jim - Installation team" className="w-full h-64 object-cover object-top" loading="lazy" />
            </div>
          </ScrollReveal>
          {photos.slice(1).map((photo, i) => (
            <ScrollReveal key={i} delay={(i + 2) * 60}>
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Installation;
