"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Star } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Shop", href: "/shop" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-midnight-navy text-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">SRE PTA</span>
            <div className="w-12 h-12 relative bg-white rounded-full overflow-hidden flex items-center justify-center p-1 border-2 border-golden-yellow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/afdb1e83-9af0-4774-ae76-ad8e89a97468.png" alt="SRE PTA Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-extrabold text-xl tracking-tight hidden sm:block">Sangaree Elementary School PTA</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-bold leading-6 hover:text-golden-yellow transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://stars.givebacks.com/shop/items/6175f14bcb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-campfire-orange px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-500 transition-colors hover:scale-105 active:scale-95 duration-200"
          >
            Join the PTA
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-midnight-navy px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <span className="sr-only">SRE PTA</span>
                <div className="w-10 h-10 relative bg-white rounded-full overflow-hidden flex items-center justify-center p-1 border border-golden-yellow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo/afdb1e83-9af0-4774-ae76-ad8e89a97468.png" alt="SRE PTA Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-extrabold text-xl text-white">Sangaree Elementary School PTA</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://stars.givebacks.com/shop/items/6175f14bcb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-campfire-orange hover:bg-white/10 transition-colors"
                  >
                    Join the PTA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
