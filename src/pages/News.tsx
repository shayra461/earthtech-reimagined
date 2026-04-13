import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const articles = [
  { title: "Building a Global Movement: How Food is Medicine Is Transforming Healthcare Worldwide", url: "https://www.rockefellerfoundation.org/perspective/building-a-global-movement-how-food-is-medicine-is-transforming-healthcare-worldwide/" },
  { title: "2026 'Dirty Dozen' produce: Nearly 100% tested positive for pesticides, including 'forever chemicals", url: "https://health.yahoo.com/wellness/nutrition/articles/2026-dirty-dozen-produce-nearly-040134375.html" },
  { title: "Organic farming's dirty secret: Why it might not be able to feed the world", url: "https://www.msn.com/en-us/foodanddrink/foodnews/organic-farming-s-dirty-secret-why-it-might-not-be-able-to-feed-the-world/ss-AA1VaoL2" },
  { title: "Does Vertical Farming actually work?", url: "https://www.msn.com/en-us/foodanddrink/foodnews/does-vertical-farming-actually-work/vi-AA1vkJlU" },
  { title: "Hydroponic Vs. Traditional Farming: Economic Winner?", url: "https://www.msn.com/en-us/money/companies/hydroponic-vs-traditional-farming-economic-winner/vi-AA1BUefV" },
  { title: "The Future Of American Farmland: Will We Have Enough To Feed Ourselves?", url: "https://www.msn.com/en-us/money/markets/the-future-of-american-farmland-will-we-have-enough-to-feed-ourselves/ss-AA1BWzyp" },
  { title: "American Farms Are Getting Dried Out From 'Thirstwaves' — And There's One Thing Every Farmer Needs To Watch Out For", url: "https://www.msn.com/en-us/weather/topstories/american-farms-are-getting-dried-out-from-thirstwaves-and-there-s-one-thing-every-farmer-needs-to-watch-out-for/ar-AA1D7WM2" },
  { title: "Experts Issue Urgent Warning On Single Factor That Could Cause Trillions Of Dollars In Food Losses", url: "https://www.yahoo.com/news/experts-issue-urgent-warning-single-103015356.html" },
  { title: "'Amber waves of grain' recede in America's heartland as wheat farmers struggle", url: "https://www.reuters.com/world/us/amber-waves-grain-recede-americas-heartland-wheat-farmers-struggle-2025-06-19/" },
  { title: "New deal on Ag-to-Urban water plan moving in Senate", url: "https://azcapitoltimes.com/news/2025/06/19/new-deal-on-ag-to-urban-water-plan-moving-in-senate/" },
  { title: "The Hidden Revolution: 800,000 Livestock Machines Impacting 570 Million Farms", url: "https://www.msn.com/en-us/money/markets/the-hidden-revolution-800-000-livestock-machines-impacting-570-million-farms/vi-AA1EFuez" },
  { title: "Beef prices have soared in the US", url: "https://abcnews.go.com/US/wireStory/beef-prices-soared-us-grilling-season-123847411" },
  { title: "Crisis in the Corn Belt: What's Threatening America's Heartland?", url: "https://www.msn.com/en-us/money/markets/crisis-in-the-corn-belt-what-s-threatening-america-s-heartland/ss-AA1J0AEy" },
  { title: "From pasture to plate: The best meat delivery services in 2025, according to testers", url: "https://health.yahoo.com/wellness/nutrition/meal-kits/article/best-meat-delivery-service-184157573.html" },
  { title: "The world has entered a new era of 'water bankruptcy' with irreversible consequences", url: "https://www.msn.com/en-us/weather/topstories/the-world-has-entered-a-new-era-of-water-bankruptcy-with-irreversible-consequences/ar-AA1UBdoO" },
];

const News = () => (
  <div className="min-h-screen pt-20">
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-premium mb-4 inline-block">News & Resources</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">In the News</h1>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              We Welcome the Opportunity to Explain Why The Ultimate Food System ™ is superior to conventional farming, vertical farming and hydroponics
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-6 h-full flex flex-col justify-between group"
              >
                <h3 className="text-foreground font-medium text-[15px] leading-relaxed group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-primary text-xs font-semibold">
                  Read Article <ExternalLink size={13} />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Video section */}
        <ScrollReveal delay={100}>
          <div className="mt-16 card-premium p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">This Will Piss You Off!</h2>
            <div className="aspect-video rounded-xl overflow-hidden max-w-3xl mx-auto" style={{ boxShadow: "var(--shadow-lg)" }}>
              <iframe
                src="https://www.youtube.com/embed/fgYcVR7YBBQ"
                title="This Will Piss You Off! - Dr. Eric Berg DC"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">Dr. Eric Berg DC</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default News;
