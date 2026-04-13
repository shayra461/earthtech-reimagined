import { Link } from "react-router-dom";
import { Droplets, Leaf, Sprout, Factory, ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-original.jpg";
import buildImg from "@/assets/build-original.jpg";
import growImg from "@/assets/grow-original.jpg";
import produceImg from "@/assets/produce-original.jpg";

const Index = () => (
  <div className="min-h-screen">
    {/* ───── HERO ───── */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Green agricultural field" className="w-full h-full object-cover" width={1500} height={1000} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>
      <div className="relative z-10 container-wide mx-auto px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-up">
            <span className="badge-premium" style={{ background: "hsla(0,0%,100%,0.1)", color: "hsl(0,0%,100%)", borderColor: "hsla(0,0%,100%,0.2)" }}>
              The Future of Agriculture
            </span>
          </div>
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.08] tracking-tight" style={{ color: "hsl(0,0%,100%)" }}>
            Be In Control of Your Own{" "}
            <span style={{ color: "hsl(148, 55%, 55%)" }}>Food Security</span>
          </h1>
          <h2 className="animate-fade-up-delay-2 text-xl md:text-2xl lg:text-3xl font-serif font-medium" style={{ color: "hsla(0,0%,100%,0.85)" }}>
            Discover the <span style={{ color: "hsl(148, 55%, 55%)" }}>Ultimate Food System™</span>
          </h2>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" style={{ background: "var(--gradient-primary)" }}>
              Get Started <ArrowRight size={16} />
            </Link>
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold transition-all duration-300" style={{ borderColor: "hsla(0,0%,100%,0.2)", color: "hsla(0,0%,100%,0.9)" }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "hsla(0,0%,100%,0.4)" }} aria-label="Scroll down">
        <ChevronDown size={28} />
      </a>
    </section>

    {/* ───── INTRO CARDS ───── */}
    <section id="about" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-premium mb-4 inline-block">About the Innovation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
              Introducing a Breakthrough Agricultural Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Introducing a breakthrough agricultural innovation promising unparalleled returns on your investment - both economically and environmentally.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="text-primary" size={28} />,
              title: "100% Organic System",
              text: "Be part of a solution that not only changes the food landscape, but also drastically lessens our environmental footprint on the planet. Imagine a future where food, whether for humans or animals, is produced in a 100% organic, fertilizer-free system that maximizes resource utilization and minimizes waste.",
            },
            {
              icon: <Droplets className="text-primary" size={28} />,
              title: "97% Less Water",
              text: "Welcome to our revolutionary food growing system - a game-changer poised to redefine the agritech industry. Our innovative approach promises high-quality food production while utilizing a staggering 97% less water than traditional agriculture. In an era where water scarcity is a growing concern, our solution represents a significant leap forward in preserving our planet's most valuable resource.",
            },
            {
              icon: <Sprout className="text-primary" size={28} />,
              title: "Pesticide-Free & Non-GMO",
              text: "Utilizing our technology, farmers will not only drastically reduce water and soil usage but also increase their yield with pesticide-free, non-GMO, clean and healthy produce. This is more than just a game-changer; it's a life-changer for billions of people and animals around the globe.",
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 150}>
              <div className="card-premium p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ───── PRODUCE BANNER ───── */}
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={produceImg} alt="Pesticide-free produce" className="w-full h-full object-cover" loading="lazy" width={1500} height={1000} />
        <div className="absolute inset-0" style={{ background: "hsla(150,30%,6%,0.65)" }} />
      </div>
      <div className="relative z-10 container-wide mx-auto px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight" style={{ color: "hsl(0,0%,100%)" }}>
            PESTICIDE-FREE, NON-GMO,
            <br className="hidden sm:block" />
            CLEAN HEALTHY PRODUCE
          </h2>
        </ScrollReveal>
      </div>
    </section>

    {/* ───── BUILD IT ───── */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-xl)" }}>
              <img src={buildImg} alt="Ultimate Food System conveyor growing system" className="w-full h-[400px] lg:h-[520px] object-cover" loading="lazy" width={1500} height={1125} />
              <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: "linear-gradient(to top, hsla(150,25%,8%,0.7) 0%, transparent 100%)" }} />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <Factory size={18} style={{ color: "hsl(0,0%,100%)" }} />
                <span className="text-sm font-medium" style={{ color: "hsl(0,0%,100%)" }}>Modular & Scalable Design</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <span className="badge-premium">Scalable Infrastructure</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">Build it.</h2>
              <div className="divider-accent" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Manufactured in sections, the growing system can scale to (8) conveyors wide, (5) conveyors tall, and 400 feet long. This configuration can{" "}
                <strong className="text-foreground font-semibold">produce 64 tons of highest quality produce per day.</strong>
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[{ val: "8", label: "Conveyors Wide" }, { val: "5", label: "Conveyors Tall" }, { val: "64t", label: "Per Day" }].map((s) => (
                  <div key={s.val} className="text-center">
                    <div className="text-3xl lg:text-4xl font-serif font-bold text-primary">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* ───── GROW IT ───── */}
    <section className="section-padding section-alt">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="badge-premium">107 Recipes for Growth</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">Grow it.</h2>
              <div className="divider-accent" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                We have over one hundred (107) unique Recipes for Growth from leafy greens to barley.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pictured: All-organic barley being grown as feed for beef cattle
              </p>
              <div className="flex items-center gap-5 pt-4">
                <div className="text-5xl lg:text-6xl font-serif font-bold text-primary">107</div>
                <div className="text-sm text-muted-foreground leading-snug">Unique Recipes<br />for Growth</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-xl)" }}>
              <img src={growImg} alt="All-organic barley grown as feed for beef cattle" className="w-full h-[400px] lg:h-[520px] object-cover" loading="lazy" width={1500} height={1125} />
              <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: "linear-gradient(to top, hsla(150,25%,8%,0.7) 0%, transparent 100%)" }} />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <Sprout size={18} style={{ color: "hsl(0,0%,100%)" }} />
                <span className="text-sm font-medium" style={{ color: "hsl(0,0%,100%)" }}>All-Organic Barley for Cattle Feed</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* ───── CTA ───── */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(148,40%,30%,0.04) 0%, transparent 70%)" }} />
      <div className="relative z-10 container-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in learning more about owning an Ultimate Food System™ or investing in Healing Earth Technologies? Equity positions are available.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" style={{ background: "var(--gradient-primary)" }}>
            Get In Touch <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Index;
