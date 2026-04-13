import ScrollReveal from "@/components/ScrollReveal";
import edImg from "@/assets/team/ed-lonergan.jpg";
import mattImg from "@/assets/team/matt-lanfrankie.jpg";

const partners = [
  { name: "Siemens Corporation (Germany)", desc: "Control hardware and software components" },
  { name: "Sun West Engineering Corp (Phoenix, AZ)", desc: "Manufacturer of the growing systems" },
  { name: "Barkley Seed Company (Yuma, AZ)", desc: "Barley Seed supplier" },
  { name: "Custom Controls (Phoenix, AZ)", desc: "Assembly and test of controller sub-systems" },
  { name: "Maskine Software (Phoenix, AZ)", desc: "Development of control software. Approved Siemens partner" },
  { name: "Arizona State University (Tempe, AZ)", desc: "Academic research and certification of test results" },
  { name: "Interlink Engineering and Design (Phoenix, AZ)", desc: "Product design consulting" },
  { name: "H D Hammers Construction Inc (Colorado Springs, CO)", desc: "Designers and Builder of the Growing System Buildings" },
];

const Team = () => (
  <div className="min-h-screen pt-20">
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-premium mb-4 inline-block">Leadership</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">Our Team</h1>
          </div>
        </ScrollReveal>

        {/* Ed Lonergan */}
        <ScrollReveal>
          <div className="card-premium p-0 mb-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-72 lg:h-auto">
                <img src={edImg} alt="Edmond L Lonergan" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Edmond L Lonergan</h2>
                  <p className="text-primary font-medium text-sm mt-1">President/CEO, CTO</p>
                </div>
                <div className="divider-accent" />
                <p className="text-muted-foreground text-[15px] leading-[1.8]">
                  Edmond L Lonergan is an advisor and is a highly experienced, creative executive that over the last fifty years has helped develop and deploy numerous high-tech products and services. These would include health and police software systems, supermarket systems, computerized voting systems, in-body heart pump controller, vein cleaning processes, heart fibrillation control, chip manufacturing controllers, hydrogen generation, fuel additives and DOD signal processors.
                </p>
                <p className="text-muted-foreground text-[15px] leading-[1.8]">
                  For the past 14 years, Mr Lonergan has been concentrating his efforts on the development of an organic, high-speed food-growing system that can grow enormous quantities of both animal and human foods using very few resources. The system is now being commercialized and is capable of eliminating starvation and reducing hunger worldwide. This growing system can make a difference in the health and well-being in many countries that are experiencing food insecurities, including numerous wealthy nations.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Matt Lanfrankie */}
        <ScrollReveal delay={100}>
          <div className="card-premium p-0 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-72 lg:h-auto order-1 lg:order-2">
                <img src={mattImg} alt="Matthew Lanfrankie" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center space-y-5 order-2 lg:order-1">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Matthew Lanfrankie</h2>
                  <p className="text-primary font-medium text-sm mt-1">VP Sales and Marketing</p>
                </div>
                <div className="divider-accent" />
                <p className="text-muted-foreground text-[15px] leading-[1.8]">
                  Matthew Lanfrankie has been in the machine building and machine sales business for over 30 years. Early in his career after 3 years in the military he did everything from building electrical panels to machine assembly and field installation and service of all types of machinery including automotive assembly equipment. And is now a recognized industry professional in all types of capital equipment sales. He has spent the last 30 years in the capacity of a professional consultant, machine sales as an independent rep, contracted with a Brazilian company to open an office in the U.S., a regional sales manager, and Director of Sales for a prominent packaging machine manufacturer in Wisconsin, and currently the Vice President of Sales and Marketing for Healing Earth Technologies. In all the positions listed, Mr. Lanfrankie has increased sales and cut waste, including eliminating poor performing sales personnel.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Strategic Partners */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="badge-premium mb-4 inline-block">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Strategic Partners</h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to our management team, Healing Earth Technologies has developed long-term relationships with the following "strategic partners", many of which have help us financially and also have freely helped to improve the overall growing system design.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 60}>
              <div className="card-premium p-6 h-full">
                <h3 className="font-semibold text-foreground text-sm">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
