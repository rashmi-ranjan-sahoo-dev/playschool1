import React from 'react';
import { schoolConfig } from '../../config/schoolConfig';
import { Mail, Phone, LogIn, UserPlus, ShoppingBag } from 'lucide-react';

/**
 * Top Bar matching reference template screenshot:
 * - Solid Orange Background: #f57f25
 * - Left: Email and Phone with white icons
 * - Right: Sign In, Register, and Cart/Bag icon
 */
export function AnnouncementBar({ onOpenRegister, onOpenSignIn }) {
  if (!schoolConfig.features.enableAnnouncementBar) return null;

  return (
    <div className="bg-[#f57f25] text-white text-xs sm:text-sm py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <a
            href={`mailto:${schoolConfig.contact.emailGeneral}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 fill-current" />
            <span className="font-normal">{schoolConfig.contact.emailGeneral}</span>
          </a>

          <a
            href={schoolConfig.contact.phoneHref}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="font-normal">{schoolConfig.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Right Side: Sign In, Register, Bag */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={onOpenSignIn}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span className="hidden xs:inline font-normal">Sign In</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span className="hidden xs:inline font-normal">Register</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="w-7 h-7 flex items-center justify-center hover:bg-white/20 rounded transition-colors text-white cursor-pointer"
            aria-label="Admissions Kit Bag"
            title="Admissions Kit"
          >
            <ShoppingBag className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
