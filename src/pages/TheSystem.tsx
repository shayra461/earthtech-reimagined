import ScrollReveal from "@/components/ScrollReveal";
import { Droplets, Zap, Leaf, Truck, Sun, Settings, ShieldCheck, Recycle } from "lucide-react";
import vegImg from "@/assets/system/vegetables-variety.jpg";
import hetImg from "@/assets/system/het-2025-update.png";
import day8Img from "@/assets/system/day8-harvest.jpg";
import radishImg from "@/assets/system/radish-microgreens.jpg";

const features = [
  { icon: <Truck size={22} />, text: "Can be located near population centers or livestock herds, drastically reducing freight costs, air pollution and produce spoilage (Food at the Point of Consumption™)" },
  { icon: <Sun size={22} />, text: "Provides year-round daily food production that is not impacted by adverse weather conditions or climate" },
  { icon: <Settings size={22} />, text: "Can be manually or automatically operated" },
  { icon: <Zap size={22} />, text: "Lowers food production costs significantly" },
  { icon: <Recycle size={22} />, text: "Does not pollute the environment – water, soil or air" },
  { icon: <ShieldCheck size={22} />, text: "Produces food that is completely organic and safe from any contaminants" },
];

const TheSystem = () => (
  <div className="min-h-screen pt-20">
    {/* Hero Banner */}
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img src={vegImg} alt="Fresh vegetables variety" className="w-full h-full object-cover" width={1500} height={1000} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 animate-fade-up">
          <span className="badge-premium mb-4 inline-block" style={{ background: "hsla(0,0%,100%,0.1)", color: "hsl(0,0%,100%)", borderColor: "hsla(0,0%,100%,0.2)" }}>The System</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold" style={{ color: "hsl(0,0%,100%)" }}>The Future of Food™</h1>
        </div>
      </div>
    </section>

    {/* Company Overview */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <img src={hetImg} alt="Healing Earth Technologies 2025 Update" className="w-full rounded-2xl" loading="lazy" style={{ boxShadow: "var(--shadow-lg)" }} />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">The Ultimate Food System™</h2>
              <div className="divider-accent" />
              <p className="text-muted-foreground text-[15px] leading-[1.8]">
                Healing Earth Technologies Inc has developed a new growing system we call The Ultimate Food System™ capable of growing vast amounts of fresh organic Food at the Point of Consumption™ which reduces transportation costs, reduces water usage by 97+% and increases productivity by at least 300%. These food production efficiencies are achieved through our controlled-environment growing system that uses a tiny fraction of the resources consumed through conventional farming methods or vertical farming.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Technology Details */}
    <section className="section-padding section-alt">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="badge-premium">Our Technology</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Revolutionary Growing System</h2>
              <div className="divider-accent" />
              <p className="text-muted-foreground text-[15px] leading-[1.8]">
                Our revolutionary growing system (28 patents pending) uses unique technology determining precisely what the plant needs for maximum production and providing it 24 hours a day. Our Recipe for Growth reduces time to harvest by 300% or more. Our system uses 70% less power than vertical farming due to our "under the hood" method. We currently have 107 Recipes for Growth for vegetables and our high protein barley grass for livestock feed.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
                <img src={day8Img} alt="Day 8 - 2 days to harvest" className="w-full h-48 lg:h-56 object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
                <img src={radishImg} alt="Radish Micro-Greens" className="w-full h-48 lg:h-56 object-cover" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-premium mb-4 inline-block">Key Advantages</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">System Benefits</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-premium p-7 h-full flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary">
                  {f.icon}
                </div>
                <p className="text-muted-foreground text-[14px] leading-relaxed">{f.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-14 card-premium p-8 lg:p-10 text-center">
            <p className="text-foreground text-lg leading-relaxed font-medium">
              The Healing Earth Technologies growing system can be sized to deliver the exact amount of food required daily (Food on Demand™) eliminating any waste
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default TheSystem;
