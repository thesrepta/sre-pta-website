import { Mail, Calendar, Download, ExternalLink } from "lucide-react";

const newsletters = [
  {
    id: "october-2026",
    month: "October",
    title: "October Newsletter",
    date: "Published: October 2026",
    description: "Read all about our upcoming Fall events, important dates, and volunteer opportunities for October.",
    link: "/newsletters/October%20Newsletter.pdf",
    image: "/images/newsletters/October%20Newsletter.png",
    type: "PDF",
  },
  {
    id: "september-2026",
    month: "September",
    title: "September Newsletter",
    date: "Published: September 2026",
    description: "A warm welcome back to school. Highlights include our successful Donut Day and a message from the PTA President.",
    link: "/newsletters/September%20Newsletter.pdf",
    image: "/images/newsletters/September%20Newsletter.png",
    type: "PDF",
  },
  {
    id: "august-2026",
    month: "August",
    title: "August Newsletter",
    date: "Published: August 2026",
    description: "Getting ready for the new school year! Important back-to-school information, supplies, and dates to remember.",
    link: "/newsletters/August%20Newsletter.pdf",
    image: "/images/newsletters/August%20Newsletter.png",
    type: "PDF",
  },
  {
    id: "july-2026",
    month: "July",
    title: "July Newsletter",
    date: "Published: July 2026",
    description: "Summer updates from the PTA. See what we've been planning over the break to make this our best year yet!",
    link: "/newsletters/July%20Newsletter.pdf",
    image: "/images/newsletters/July%20Newsletter.png",
    type: "PDF",
  }
];

export default function NewsletterPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-midnight-navy text-white px-4 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-golden-yellow/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-campfire-orange/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <Mail className="h-5 w-5 text-golden-yellow" />
            <span className="font-bold text-sm tracking-wide uppercase text-golden-yellow">Stay Updated</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            PTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow to-campfire-orange">Newsletters</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed font-medium">
            Catch up on the latest news, announcements, and celebrations from the Sangaree Elementary School PTA!
          </p>
        </div>
      </section>

      {/* Newsletter List */}
      <section className="px-4 max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          {newsletters.map((newsletter) => (
            <div key={newsletter.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-midnight-navy/5 flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 hover:shadow-md transition-shadow group">
              {/* Thumbnail */}
              <div className="w-full sm:w-48 h-64 sm:h-auto flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative group-hover:border-forest-green/30 transition-colors">
                <a href={newsletter.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img 
                    src={newsletter.image} 
                    alt={`${newsletter.title} Thumbnail`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-midnight-navy/0 group-hover:bg-midnight-navy/10 transition-colors flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md h-8 w-8" />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 text-sm font-bold text-forest-green tracking-wide uppercase">
                    <Calendar className="h-4 w-4" />
                    {newsletter.month}
                  </div>
                  <h2 className="text-2xl font-extrabold text-midnight-navy group-hover:text-forest-green transition-colors">
                    <a href={newsletter.link} target="_blank" rel="noopener noreferrer">
                      {newsletter.title}
                    </a>
                  </h2>
                  <p className="text-midnight-navy/70 leading-relaxed">
                    {newsletter.description}
                  </p>
                  <div className="text-sm text-midnight-navy/50 font-medium">
                    {newsletter.date}
                  </div>
                </div>
                
                <div className="flex-shrink-0 self-start sm:self-center">
                  <a 
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-midnight-navy hover:bg-midnight-navy/90 text-white font-bold py-3 px-6 rounded-xl transition-colors w-full sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    Download {newsletter.type}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup Prompt */}
        <div className="mt-16 bg-soft-sage/30 rounded-3xl p-8 md:p-12 text-center border border-forest-green/10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-midnight-navy mb-4">
            Get News Delivered to Your Inbox
          </h3>
          <p className="text-midnight-navy/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Don't miss an update! Join the PTA to automatically receive our monthly newsletters and important announcements.
          </p>
          <a 
            href="https://stars.givebacks.com/shop/items/6175f14bcb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-campfire-orange hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
          >
            Join the PTA Today
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
