import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";

import img1 from "@/assets/gallery/160-system.jpg";
import img2 from "@/assets/gallery/blood-red-microgreens.jpg";
import img3 from "@/assets/gallery/steers-barley.jpg";
import img4 from "@/assets/gallery/test-herd-co.jpg";
import img5 from "@/assets/gallery/sprouts.jpg";
import img6 from "@/assets/gallery/day2-system.jpg";
import img7 from "@/assets/gallery/day5-system.jpg";
import img8 from "@/assets/gallery/day8-harvest.jpg";
import img9 from "@/assets/gallery/spinach.jpg";
import img10 from "@/assets/gallery/leaf-lettuce.jpg";
import img11 from "@/assets/gallery/herb-microgreens.jpg";
import img12 from "@/assets/gallery/basil.jpg";
import img13 from "@/assets/gallery/microgreen-vegetables.jpg";

const items = [
  { src: img1, caption: "What it is" },
  { src: img2, caption: "Blood Red Micro Greens" },
  { src: img3, caption: "Steers enjoying the fresh barley" },
  { src: img4, caption: "Test herd in CO." },
  { src: img5, caption: "Sprouts" },
  { src: img6, caption: "Day 2 on the system" },
  { src: img7, caption: "Day 5 on the system" },
  { src: img8, caption: "Day 8 - 2 days to harvest" },
  { src: img9, caption: "Rangitoto spinach" },
  { src: img10, caption: "Leaf lettuce" },
  { src: img11, caption: "Herb microgreens" },
  { src: img12, caption: "Basil" },
  { src: img13, caption: "Microgreen vegetables" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-premium mb-4 inline-block">Gallery</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">Our Work</h1>
              <p className="text-muted-foreground text-lg mt-4">Photos from our growing systems, produce, and installations.</p>
            </div>
          </ScrollReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className="gallery-item break-inside-avoid"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <div className="gallery-overlay rounded-xl">
                    <span className="text-sm font-medium" style={{ color: "hsl(0,0%,100%)" }}>{item.caption}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "hsla(150,25%,6%,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full"
            style={{ color: "hsl(0,0%,100%)", background: "hsla(0,0%,100%,0.1)" }}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].src}
              alt={items[lightbox].caption}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <p className="mt-4 text-sm font-medium" style={{ color: "hsla(0,0%,100%,0.8)" }}>{items[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
