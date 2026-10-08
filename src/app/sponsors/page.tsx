import { ExternalLink, HeartHandshake } from "lucide-react";

const sponsors = [
  {
    id: "sweet-mollie",
    name: "Sweet Mollie Floral Bouquet",
    image: "/sre-pta-website/images/sponsors/Sweet-Mollie-Black.png",
  },
  {
    id: "texas-roadhouse",
    name: "Texas Roadhouse",
    image: "/sre-pta-website/images/sponsors/Texas-Roadhouse-Logo-1.jpg",
  },
  {
    id: "river-dogs",
    name: "Charleston River Dogs",
    image: "/sre-pta-website/images/sponsors/Charleston River Dogs Logo.jpg",
  },
  {
    id: "sc-aquarium",
    name: "South Carolina Aquarium",
    image: "/sre-pta-website/images/sponsors/South Carolina Aquarium Logo.jpeg",
  },
  {
    id: "stingrays",
    name: "South Carolina Stingrays",
    image: "/sre-pta-website/images/sponsors/South Carolina Stingrays Hockey Logo.svg",
  },
  {
    id: "topgolf",
    name: "Topgolf",
    image: "/sre-pta-website/images/sponsors/Topgolf-Logo.jpg",
  },
  {
    id: "riverbanks-zoo",
    name: "Riverbanks Zoo & Garden",
    image: "/sre-pta-website/images/sponsors/riverbanks-zoo.jpg.webp",
  }
];

export default function SponsorsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-midnight-navy text-white px-4 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-golden-yellow/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-campfire-orange/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <HeartHandshake className="h-5 w-5 text-golden-yellow" />
            <span className="font-bold text-sm tracking-wide uppercase text-golden-yellow">Community Partners</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Thank you to our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow to-campfire-orange">2026-2027 PTA Sponsors</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/80 leading-relaxed font-medium mt-6">
            We are incredibly grateful to the local businesses and organizations that generously support Sangaree Elementary. Your contributions help us fund essential programs, events, and resources for our students and teachers!
          </p>
        </div>
      </section>

      {/* Sponsors Grid Section */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-midnight-navy/5 flex flex-col items-center justify-center aspect-video group"
            >
              <img 
                src={sponsor.image} 
                alt={`${sponsor.name} Logo`} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <div className="bg-soft-sage/30 rounded-3xl p-8 md:p-16 text-center border border-forest-green/10 flex flex-col items-center">
          <div className="bg-forest-green/10 p-4 rounded-full mb-6">
            <HeartHandshake className="h-10 w-10 text-forest-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-midnight-navy mb-6">
            Want to See Your Business Here?
          </h2>
          <p className="text-midnight-navy/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Partner with the SRE PTA and make a direct impact on our school community. Sponsors receive recognition across our website, newsletters, and community events. We couldn't do it without you!
          </p>
          <a 
            href="https://stars.givebacks.com/shop/items/523b1481e5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-campfire-orange hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 active:scale-95 duration-200 text-lg shadow-md"
          >
            Become a Sponsor Today
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
