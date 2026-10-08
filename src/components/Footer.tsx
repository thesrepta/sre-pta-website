import Link from "next/link";
import { Mail, ExternalLink, Star } from "lucide-react";

// Simple custom Facebook SVG icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-navy text-white/80 relative overflow-hidden mt-auto">
      {/* Decorative stars */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Star className="absolute top-10 left-[10%] h-4 w-4 fill-golden-yellow" />
        <Star className="absolute top-20 right-[20%] h-6 w-6 fill-golden-yellow" />
        <Star className="absolute bottom-10 left-[30%] h-5 w-5 fill-golden-yellow" />
        <Star className="absolute top-1/2 right-[10%] h-3 w-3 fill-golden-yellow" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
              <div className="bg-golden-yellow/20 p-1.5 rounded-full">
                <Star className="h-5 w-5 fill-golden-yellow text-golden-yellow" />
              </div>
              Sangaree Elementary PTA
            </h2>
            <address className="not-italic text-sm space-y-1 mb-4">
              <p>Sangaree Elementary School PTA</p>
              <p>1460 Royale Road</p>
              <p>Summerville, SC 29486</p>
            </address>
            <div className="flex gap-4">
              <a href="mailto:contact@srepta.org" className="hover:text-golden-yellow transition-colors" aria-label="Email the PTA">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-golden-yellow transition-colors" aria-label="Visit our Facebook page">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://stars.givebacks.com/shop" target="_blank" rel="noopener noreferrer" className="hover:text-golden-yellow transition-colors" aria-label="Visit our Givebacks Shop">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About the PTA</Link>
              </li>
              <li>
                <a href="https://stars.givebacks.com/shop" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PTA Store & Memberships</a>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">Events & Volunteering</Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-white transition-colors">Our Sponsors</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Affiliation */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>Affiliated with South Carolina PTA (SCPTA)</li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>&copy; {currentYear} Sangaree Elementary School PTA. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl">
            This website is operated by the Sangaree Elementary School PTA, a volunteer-led non-profit organization. It is not the official website of Sangaree Elementary School or the local school district.
          </p>
        </div>
      </div>
    </footer>
  );
}
