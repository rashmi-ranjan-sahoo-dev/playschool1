import React, { useState } from 'react';
import { schoolConfig } from '../../config/schoolConfig';
import { Mail, Phone, MapPin, ChevronRight, Send, ArrowUp, Twitter, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

/**
 * Footer matching Baby House reference:
 * - Reduced top padding: pt-10 sm:pt-12 pb-8
 * - Dark background (#181818)
 * - 4 columns:
 *   1. About Us (Preschool philosophy, Email, Phone, Vizag Campus Address)
 *   2. Useful Links (Double angle arrow links with hover shift)
 *   3. Recent Work (8 authentic preschool photo thumbnails in 4x2 grid)
 *   4. Mailing List (Email input with submit button + social channels)
 * - Bottom footer with #pagetop button & copyright
 */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  // 8 authentic preschool activity thumbnails
  const recentPhotos = [
    "/assets/img/gallery/gallery-celebration.jpg",
    "/assets/img/gallery/gallery-snack.jpg",
    "/assets/img/facilities/facility-music.jpg",
    "/assets/img/hero/hero-slide-1.jpg",
    "/assets/img/hero/hero-slide-2.jpg",
    "/assets/img/hero/hero-slide-3.jpg",
    "/assets/img/gallery/gallery-celebration.jpg",
    "/assets/img/gallery/gallery-snack.jpg",
  ];

  return (
    <footer id="contact" className="bg-[#181818] text-white pt-10 sm:pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-stone-800">
          {/* Column 1: About Us */}
          <div className="flex flex-col text-left">
            <h4 className="font-display font-bold uppercase text-white text-base tracking-wider mb-4">
              About Us
            </h4>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Little Veda is a premier early childhood learning preschool and daycare in Visakhapatnam. We cultivate curiosity through play-based inquiry, loving educators, and 100% child-safe facilities.
            </p>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f57f25] shrink-0" />
                <a href={`mailto:${schoolConfig.contact.emailGeneral}`} className="hover:text-[#f57f25] transition-colors truncate">
                  {schoolConfig.contact.emailGeneral}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f57f25] shrink-0" />
                <a href={schoolConfig.contact.phoneHref} className="hover:text-[#f57f25] transition-colors">
                  P: {schoolConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f57f25] shrink-0 mt-1" />
                <span className="text-stone-400 text-xs sm:text-sm">
                  {schoolConfig.contact.address.street}, {schoolConfig.contact.address.locality}, {schoolConfig.contact.address.city} - {schoolConfig.contact.address.pincode}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col text-left">
            <h4 className="font-display font-bold uppercase text-white text-base tracking-wider mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              {[
                { name: 'Little Veda Blog', href: '#blog' },
                { name: 'Campus Gallery', href: '#gallery' },
                { name: 'Our Facilities', href: '#facilities' },
                { name: 'Loving Teachers', href: '#teachers' },
                { name: 'About Little Veda', href: '#about' },
                { name: 'Parents Feedback', href: '#testimonials' },
                { name: 'Book a Campus Visit', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#f57f25] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#f57f25] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Work */}
          <div className="flex flex-col text-left">
            <h4 className="font-display font-bold uppercase text-white text-base tracking-wider mb-4">
              Recent Moments
            </h4>
            <div className="grid grid-cols-4 gap-2 mb-2.5">
              {recentPhotos.map((src, idx) => (
                <a
                  key={idx}
                  href="#gallery"
                  className="block overflow-hidden aspect-square rounded-lg border border-stone-800 hover:border-[#f57f25] transition-colors"
                >
                  <img
                    src={src}
                    alt="Recent preschool activity"
                    className="w-full h-full object-cover hover:scale-115 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
            <a
              href="#gallery"
              className="text-xs font-bold text-[#f57f25] hover:underline inline-flex items-center gap-1 mt-1"
            >
              <span>Explore full gallery</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Column 4: Mailing List */}
          <div className="flex flex-col text-left">
            <h4 className="font-display font-bold uppercase text-white text-base tracking-wider mb-4">
              Mailing List
            </h4>
            <p className="text-sm text-stone-400 mb-3">
              Sign up for our newsletter to get seasonal parenting guides & admissions alerts.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubscribe} className="relative mb-3">
              <input
                type="email"
                required
                placeholder="Enter email address..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-white text-black px-4 py-2 rounded-full pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#f57f25]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-9 bg-[#f57f25] hover:bg-[#d96a15] text-white rounded-full flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-[#a9d63b] mb-2 font-medium">
                Thank you for subscribing!
              </p>
            )}

            <p className="text-xs text-stone-500 mb-3">
              We respect your privacy. Zero spam.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-2">
              {[
                { name: 'Twitter', icon: Twitter, url: '#' },
                { name: 'Facebook', icon: Facebook, url: '#' },
                { name: 'Instagram', icon: Instagram, url: '#' },
                { name: 'LinkedIn', icon: Linkedin, url: '#' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    className="w-8 h-8 rounded-lg bg-[#f57f25] hover:bg-white text-white hover:text-[#f57f25] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    aria-label={s.name}
                  >
                    <Icon className="w-3.5 h-3.5 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>
            Copyright {new Date().getFullYear()} All Rights Reserved <span className="text-[#f57f25] font-bold">LITTLE VEDA</span>
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#f57f25] hover:bg-white text-white hover:text-[#f57f25] flex items-center justify-center transition-colors shadow-md cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
