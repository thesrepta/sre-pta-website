import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: "campfire-grams",
    title: "Creepy Campfire Grams",
    category: "Fundraiser",
    date: "Order by: Oct 16, 2026",
    time: null,
    location: "Online / SRE Classrooms",
    description: "Halloween-themed goodie bags for students. Send a spooky surprise to your favorite Star! Perfect for celebrating the season.",
    image: "/images/events/02_Creepy_Campfire_Grams.png",
    link: "https://stars.givebacks.com/shop/items/45f1e4e9685355",
    linkText: "Order Now",
    external: true,
  },
  {
    id: "holiday-shop",
    title: "North Star Holiday Shop",
    category: "Fundraiser",
    date: "December 8 - 12, 2026",
    time: "During School Hours",
    location: "SRE Library",
    description: "Students can shop for holiday gifts for their family and friends at our annual North Star Holiday Shop! Gifts range from $1 to $15.",
    image: "/images/events/03_North_Star_Holiday_Shop.png",
    link: null,
    linkText: null,
    external: false,
  },
  {
    id: "school-dance",
    title: "SRE PTA Annual School Dance",
    category: "Family Event",
    date: "March 19, 2027",
    time: "6:00 PM - 8:00 PM",
    location: "SRE Cafeteria",
    description: "Family-friendly school dance. Put on your dancing shoes and join us under the stars. More details and ticket information coming soon!",
    image: "/images/events/05_Dancing_Under_the_Stars.png",
    link: null,
    linkText: null,
    external: false,
  },
  {
    id: "donut-day",
    title: "$1 Donut Day",
    category: "Recurring Event",
    date: "First Friday Every Month",
    time: "Morning Drop-off",
    location: "SRE Entrance",
    description: "Start the month off right! Students can grab a delicious donut for just $1 on the first Friday of every month.",
    image: "/images/events/01_Donut_Day.png",
    link: null,
    linkText: null,
    external: false,
  },
  {
    id: "valentine-grams",
    title: "Beary Sweet Valentine Grams",
    category: "Fundraiser",
    date: "February 2027",
    time: null,
    location: "Online / SRE Classrooms",
    description: "Send a 'Beary Sweet' Valentine Gram to a student, teacher, or friend! Proceeds support PTA programs.",
    image: "/images/events/04_Beary_Sweet_Valentine_Grams.png",
    link: null,
    linkText: null,
    external: false,
  },
  {
    id: "fun-run",
    title: "Reach for the Stars Fun Run",
    category: "Fundraiser",
    date: "April 2027",
    time: "During School Hours",
    location: "SRE Track",
    description: "Our biggest fundraiser of the year! Students will participate in an energetic fun run to reach their goals and earn exciting prizes.",
    image: "/images/events/06_Reach_for_the_Stars_Fun_Run.png",
    link: null,
    linkText: null,
    external: false,
  },
  {
    id: "staffulty-appreciation",
    title: "Staffulty Appreciation Week",
    category: "Community Event",
    date: "May 2027",
    time: null,
    location: "SRE Campus",
    description: "A week dedicated to showing our amazing teachers and staff how much we appreciate their hard work and dedication. Great people, brighter futures!",
    image: "/images/events/07_Staffulty_Appreciation_Week.png",
    link: null,
    linkText: null,
    external: false,
  }
];

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-midnight-navy text-white px-4 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-campfire-orange/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-forest-green/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <Calendar className="h-5 w-5 text-campfire-orange" />
            <span className="font-bold text-sm tracking-wide uppercase text-campfire-orange">Upcoming Activities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-campfire-orange to-golden-yellow">Happenings</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed font-medium">
            Join us for fun family nights, important meetings, and community fundraisers. There's always something exciting happening under the stars!
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="px-4 max-w-5xl mx-auto w-full">
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-midnight-navy/5 group hover:shadow-md transition-all flex flex-col md:flex-row">
              {/* Event Image */}
              <div className="md:w-1/3 h-64 md:h-auto bg-midnight-navy/5 relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-midnight-navy/5 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Event Details */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <div className="text-sm font-bold text-forest-green mb-2 uppercase tracking-wide">
                      {event.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-midnight-navy group-hover:text-forest-green transition-colors">
                      {event.title}
                    </h2>
                  </div>
                </div>

                {/* Date/Time/Location */}
                <div className="flex flex-col gap-3 mb-6 bg-soft-sage/30 rounded-2xl p-5 border border-forest-green/10">
                  <div className="flex items-center gap-3 text-midnight-navy/80 font-medium">
                    <Calendar className="h-5 w-5 text-campfire-orange flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-3 text-midnight-navy/80 font-medium">
                      <Clock className="h-5 w-5 text-campfire-orange flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-midnight-navy/80 font-medium">
                    <MapPin className="h-5 w-5 text-campfire-orange flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-midnight-navy/70 leading-relaxed mb-8 flex-1">
                  {event.description}
                </p>

                {/* Call to Action */}
                <div>
                  {event.link ? (
                    <a 
                      href={event.link}
                      target={event.external ? "_blank" : "_self"}
                      rel={event.external ? "noopener noreferrer" : ""}
                      className="inline-flex items-center justify-center gap-2 bg-midnight-navy hover:bg-midnight-navy/90 text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto text-center"
                    >
                      {event.linkText}
                      {event.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-500 font-bold py-3 px-8 rounded-xl cursor-not-allowed w-full sm:w-auto text-center">
                      More Info Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
