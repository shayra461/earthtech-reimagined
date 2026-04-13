import { Link } from "react-router-dom";
import { Droplets, Leaf, Factory, Sprout, ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-original.jpg";
import buildImage from "@/assets/build-original.jpg";
import growImage from "@/assets/grow-original.jpg";
import produceImage from "@/assets/produce-original.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Green agricultural field - Healing Earth Technologies"
            className="w-full h-full object-cover"
            width={1500}
            height={1000}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>

        <div className="relative z-10 container-wide mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-xs tracking-widest uppercase mb-6">
                The Future of Agriculture
              </span>
            </div>
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Be In Control of Your Own{" "}
              <span style={{ color: "hsl(152, 60%, 55%)" }}>
                Food Security
              </span>
            </h1>
            <h2 className="animate-fade-up-delay-2 text-2xl md:text-3xl font-serif text-primary-foreground/90">
              Discover the <span style={{ color: "hsl(152, 60%, 55%)" }}>Ultimate Food System™</span>
            </h2>
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-4 text-sm font-semibold text-primary-foreground/90 transition-all duration-300 hover:bg-primary-foreground/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* Introduction / About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-xs tracking-widest uppercase text-primary font-semibold">
                About the Innovation
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Introducing a Breakthrough Agricultural Innovation
              </h2>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Introducing a breakthrough agricultural innovation promising unparalleled returns on your investment - both economically and environmentally.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={0}>
              <div className="card-elevated p-8 hover-lift h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Leaf className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  100% Organic System
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Be part of a solution that not only changes the food landscape, but also drastically lessens our environmental footprint on the planet. Imagine a future where food, whether for humans or animals, is produced in a 100% organic, fertilizer-free system that maximizes resource utilization and minimizes waste.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="card-elevated p-8 hover-lift h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Droplets className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  97% Less Water
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Welcome to our revolutionary food growing system - a game-changer poised to redefine the agritech industry. Our innovative approach promises high-quality food production while utilizing a staggering 97% less water than traditional agriculture. In an era where water scarcity is a growing concern, our solution represents a significant leap forward in preserving our planet's most valuable resource.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card-elevated p-8 hover-lift h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sprout className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Pesticide-Free &amp; Non-GMO
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Utilizing our technology, farmers will not only drastically reduce water and soil usage but also increase their yield with pesticide-free, non-GMO, clean and healthy produce. This is more than just a game-changer; it's a life-changer for billions of people and animals around the globe.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Produce Banner with Original Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={produceImage}
            alt="Pesticide-free, Non-GMO, clean healthy produce"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1500}
            height={1000}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 container-wide mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight" style={{ color: "hsl(0, 0%, 100%)" }}>
              PESTICIDE-FREE, NON-GMO,
              <br />
              CLEAN HEALTHY PRODUCE
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Build It Section — with original image */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={buildImage}
                  alt="Ultimate Food System conveyor growing system"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                  width={1500}
                  height={1125}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2">
                    <Factory size={20} style={{ color: "hsl(0, 0%, 100%)" }} />
                    <span className="text-sm font-medium" style={{ color: "hsl(0, 0%, 100%)" }}>
                      Modular &amp; Scalable Design
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <span className="text-xs tracking-widest uppercase text-primary font-semibold">
                  Scalable Infrastructure
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                  Build it.
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Manufactured in sections, the growing system can scale to (8) conveyors wide, (5) conveyors tall, and 400 feet long. This configuration can{" "}
                  <strong className="text-foreground">produce 64 tons of highest quality produce per day.</strong>
                </p>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground mt-1">Conveyors Wide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary">5</div>
                    <div className="text-xs text-muted-foreground mt-1">Conveyors Tall</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary">64t</div>
                    <div className="text-xs text-muted-foreground mt-1">Per Day</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Grow It Section — with original image */}
      <section className="section-padding section-alt">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0}>
              <div className="space-y-6">
                <span className="text-xs tracking-widest uppercase text-primary font-semibold">
                  107 Recipes for Growth
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                  Grow it.
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We have over one hundred (107) unique Recipes for Growth from leafy greens to barley.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pictured: All-organic barley being grown as feed for beef cattle
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="text-5xl font-serif font-bold text-primary">107</div>
                  <div className="text-sm text-muted-foreground leading-snug">
                    Unique Recipes<br />for Growth
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={growImage}
                  alt="All-organic barley being grown as feed for beef cattle"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                  width={1500}
                  height={1125}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2">
                    <Sprout size={20} style={{ color: "hsl(0, 0%, 100%)" }} />
                    <span className="text-sm font-medium" style={{ color: "hsl(0, 0%, 100%)" }}>
                      All-Organic Barley for Cattle Feed
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative z-10 container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Transform Agriculture?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Interested in learning more about owning an Ultimate Food System™ or investing in Healing Earth Technologies? Equity positions are available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
