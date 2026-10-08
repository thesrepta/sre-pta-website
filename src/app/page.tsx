import Link from "next/link";
import { 
  Star, 
  Trees, 
  Tent, 
  Flame, 
  PawPrint, 
  Users, 
  GraduationCap, 
  HeartHandshake,
  Calendar,
  ChevronRight,
  ArrowRight,
  FileText,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Section A: Hero Banner */}
      <section className="relative overflow-hidden bg-midnight-navy text-white px-4 py-20 md:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Stars */}
          <Star className="absolute top-10 left-[10%] h-4 w-4 fill-golden-yellow text-golden-yellow animate-pulse" />
          <Star className="absolute top-20 right-[20%] h-6 w-6 fill-golden-yellow text-golden-yellow animate-pulse" style={{ animationDelay: "1s" }} />
          <Star className="absolute top-1/4 left-[30%] h-3 w-3 fill-golden-yellow text-golden-yellow animate-pulse" style={{ animationDelay: "0.5s" }} />
          <Star className="absolute top-1/3 right-[15%] h-5 w-5 fill-golden-yellow text-golden-yellow animate-pulse" style={{ animationDelay: "1.5s" }} />
          
          {/* Moon / Large Star */}
          <div className="absolute top-10 right-10 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-golden-yellow/20 rounded-full blur-2xl"></div>
          
          {/* Trees at bottom */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-end opacity-20">
            <Trees className="h-32 w-32 md:h-64 md:w-64 -ml-10 -mb-10 text-forest-green" />
            <Trees className="h-24 w-24 md:h-48 md:w-48 ml-20 -mb-5 text-forest-green hidden md:block" />
            <Trees className="h-40 w-40 md:h-80 md:w-80 -mr-10 -mb-10 text-forest-green" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <Star className="h-5 w-5 fill-golden-yellow text-golden-yellow" />
            <span className="font-bold text-sm tracking-wide uppercase text-golden-yellow">Leading Under the Stars</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow to-campfire-orange">SRE PTA!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-white/90">
            Together, We Shine Brighter!
          </p>
          
          <p className="text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed font-medium">
            The Sangaree Elementary School PTA brings families, teachers, and our school community together to support students, create memorable experiences, and help every Star shine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a 
              href="https://stars.givebacks.com/shop/items/6175f14bcb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-campfire-orange hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2"
            >
              Join the PTA
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link 
              href="/events"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 text-lg flex items-center justify-center"
            >
              Explore Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Section B: What Is the PTA? */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl font-extrabold text-midnight-navy">What Is the PTA?</h2>
          <p className="text-lg text-midnight-navy/80 font-medium leading-relaxed">
            The Sangaree Elementary School PTA is a volunteer-led organization made up of parents, guardians, teachers, and community members who work together to support our students and school. Through fundraising, family events, volunteer opportunities, and community partnerships, we help create meaningful experiences for our Stars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-midnight-navy/5 hover:shadow-md transition-shadow">
            <div className="bg-soft-sage w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="h-8 w-8 text-forest-green" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-navy mb-3">Support Our Students</h3>
            <p className="text-midnight-navy/70 leading-relaxed">
              Help fund school activities, student incentives, and enriching experiences.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-midnight-navy/5 hover:shadow-md transition-shadow">
            <div className="bg-golden-yellow/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-campfire-orange" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-navy mb-3">Support Our Teachers</h3>
            <p className="text-midnight-navy/70 leading-relaxed">
              Provide resources, appreciation activities, and additional support for our hardworking school staff.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-midnight-navy/5 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="h-8 w-8 text-midnight-navy" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-navy mb-3">Build Our Community</h3>
            <p className="text-midnight-navy/70 leading-relaxed">
              Bring families together through school events, volunteering, and meaningful partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Section C: Get Involved */}
      <section className="bg-soft-sage px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-extrabold text-midnight-navy">There's a Place for Everyone in the PTA!</h2>
            <p className="text-lg text-midnight-navy/80 font-medium leading-relaxed">
              Whether you have a few hours to volunteer, ideas to share, or simply want to show your support, there is a way for you to make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full border border-forest-green/10">
              <div className="flex-1">
                <div className="flex flex-col items-center gap-4 mb-4 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/home/Join the PTA Bear Badge copy.png" alt="Join the PTA Bear" className="w-32 h-32 object-contain drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-midnight-navy">Join the PTA</h3>
                </div>
                <p className="text-midnight-navy/70 mb-4 text-center">
                  PTA membership supports the organization. Membership does not require attending every meeting or volunteering at every event.
                </p>
              </div>
              <a 
                href="https://stars.givebacks.com/shop/items/6175f14bcb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-forest-green hover:bg-forest-green/90 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors"
              >
                Become a Member
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full border border-forest-green/10">
              <div className="flex-1">
                <div className="flex flex-col items-center gap-4 mb-4 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/home/Volunteer Logo.png" alt="Volunteer" className="w-32 h-32 object-contain drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-midnight-navy">Become a Volunteer</h3>
                </div>
                <p className="text-midnight-navy/70 mb-4 text-center">
                  Volunteers help with school events, fundraising activities, and other PTA-supported opportunities.
                </p>
              </div>
              <a 
                href="https://bcsdextranet.bcsdschools.net/volunteers/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-campfire-orange hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors"
              >
                Volunteer Background Check
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full border border-forest-green/10">
              <div className="flex-1">
                <div className="flex flex-col items-center gap-4 mb-4 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/home/Dads on Demand Logo.png" alt="Dads on Demand" className="w-32 h-32 object-contain drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-midnight-navy">Dads on Demand</h3>
                </div>
                <p className="text-midnight-navy/70 mb-4 text-center">
                  An initiative encouraging dads and father figures to become involved in the school community.
                </p>
              </div>
              <button className="mt-6 w-full bg-midnight-navy hover:bg-midnight-navy/90 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Upcoming Events */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-4xl font-extrabold text-midnight-navy flex items-center gap-3">
            <Calendar className="h-8 w-8 text-campfire-orange" />
            What's Happening at SRE?
          </h2>
          <Link 
            href="/events"
            className="text-forest-green font-bold hover:text-forest-green/80 flex items-center gap-1 group"
          >
            View All Events 
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mock Event 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-midnight-navy/5 group hover:shadow-md transition-all flex flex-col">
            <div className="h-48 bg-midnight-navy/5 relative flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/02_Creepy_Campfire_Grams.png" alt="Creepy Campfire Grams" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm font-bold text-campfire-orange mb-2 uppercase tracking-wide">Fundraiser</div>
              <h3 className="text-xl font-bold text-midnight-navy mb-2 group-hover:text-forest-green transition-colors">Creepy Campfire Grams</h3>
              <p className="text-midnight-navy/60 text-sm mb-4">Order by: Oct 16, 2026</p>
              <p className="text-midnight-navy/80 mb-6 line-clamp-2 flex-1">
                Halloween-themed goodie bags for students. Send a spooky surprise!
              </p>
              <a 
                href="https://stars.givebacks.com/shop/items/45f1e4e9685355" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-forest-green font-bold text-sm flex items-center gap-1 hover:text-forest-green/80"
              >
                Order Now <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mock Event 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-midnight-navy/5 group hover:shadow-md transition-all flex flex-col">
            <div className="h-48 bg-midnight-navy/5 relative flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/03_North_Star_Holiday_Shop.png" alt="North Star Holiday Shop" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm font-bold text-forest-green mb-2 uppercase tracking-wide">Fundraiser</div>
              <h3 className="text-xl font-bold text-midnight-navy mb-2 group-hover:text-forest-green transition-colors">North Star Holiday Shop</h3>
              <p className="text-midnight-navy/60 text-sm mb-4">December 2026</p>
              <p className="text-midnight-navy/80 mb-6 line-clamp-2 flex-1">
                Students can shop for holiday gifts for their family and friends at our annual North Star Holiday Shop!
              </p>
              <a 
                href="/events" 
                className="text-forest-green font-bold text-sm flex items-center gap-1 hover:text-forest-green/80"
              >
                View Details <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mock Event 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-midnight-navy/5 group hover:shadow-md transition-all flex flex-col">
            <div className="h-48 bg-midnight-navy/5 relative flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/05_Dancing_Under_the_Stars.png" alt="Dancing Under the Stars" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm font-bold text-golden-yellow mb-2 uppercase tracking-wide">Family Event</div>
              <h3 className="text-xl font-bold text-midnight-navy mb-2 group-hover:text-forest-green transition-colors">SRE PTA Annual School Dance</h3>
              <p className="text-midnight-navy/60 text-sm mb-4">Mar 19, 2027</p>
              <p className="text-midnight-navy/80 mb-6 line-clamp-2">
                Family-friendly school dance. Put on your dancing shoes and join us under the stars.
              </p>
              <button className="text-forest-green font-bold text-sm flex items-center gap-1">
                View Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid containing Section E and F */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section E: Latest Newsletter */}
          <div className="bg-midnight-navy rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <Star className="absolute -top-10 -right-10 h-32 w-32 fill-golden-yellow/10 text-golden-yellow/10" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Stay in the Loop!</h2>
              <p className="text-white/80 mb-8 max-w-md">
                Read the latest issue of The SRE Star Report for all the news and updates from your PTA.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="bg-white w-24 h-32 rounded-lg shadow-inner flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/newsletters/October Newsletter.png" alt="October Newsletter" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">October 2026 Newsletter</h3>
                  <p className="text-sm text-white/70 mb-4">Fall updates, Campfire Grams, and more!</p>
                  <Link 
                    href="/newsletter"
                    className="inline-flex items-center gap-2 bg-golden-yellow text-midnight-navy font-bold py-2 px-5 rounded-full hover:bg-white transition-colors"
                  >
                    Read Newsletter <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section F: Support Our PTA */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border-2 border-forest-green/20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-midnight-navy mb-4">Help Our Stars Shine Brighter!</h2>
            <p className="text-midnight-navy/80 mb-8 max-w-md leading-relaxed">
              Families and local businesses can support the PTA through memberships, volunteering, fundraising, sponsorships, and PTA purchases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop"
                className="bg-forest-green hover:bg-forest-green/90 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex-1"
              >
                Visit Our Shop
              </Link>
              <Link 
                href="/sponsors"
                className="bg-campfire-orange hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex-1"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Section G: Sponsor Recognition */}
      <section className="px-4 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl font-extrabold text-midnight-navy mb-10">Thank You to Our Community Partners!</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/Texas-Roadhouse-Logo-1.jpg" alt="Texas Roadhouse" className="h-20 w-auto object-contain mix-blend-multiply" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/Sweet Mollie Floral Bouquet Logo-2.png" alt="Sweet Mollie Floral Bouquet" className="h-20 w-auto object-contain mix-blend-multiply" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/Charleston River Dogs Logo.jpg" alt="Charleston River Dogs" className="h-20 w-auto object-contain mix-blend-multiply" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/South Carolina Aquarium Logo.jpeg" alt="South Carolina Aquarium" className="h-20 w-auto object-contain mix-blend-multiply" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/South Carolina Stingrays Hockey Logo.svg" alt="South Carolina Stingrays" className="h-20 w-auto object-contain mix-blend-multiply" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sponsors/Topgolf-Logo.jpg" alt="Topgolf" className="h-20 w-auto object-contain mix-blend-multiply" />
        </div>

        <div className="mt-12">
          <Link 
            href="/sponsors"
            className="inline-flex items-center gap-2 text-forest-green font-bold hover:text-forest-green/80"
          >
            Become a Sponsor <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
