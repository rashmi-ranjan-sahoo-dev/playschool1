import React from 'react';
import { schoolConfig } from '../../config/schoolConfig';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

/**
 * Persistent bottom thumb utility bar for mobile devices.
 * Ensures parents can instantly call, WhatsApp, or request a tour with one tap.
 */
export function MobileActionBar({ onBookVisit }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-coral-100 py-2.5 px-4 md:hidden shadow-lg shadow-black/10">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        <a
          href={schoolConfig.contact.phoneHref}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-coral-50 text-brand-coral-700 font-display font-medium text-xs active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-coral-500 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={schoolConfig.contact.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366]/15 text-[#128C7E] font-display font-medium text-xs active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-[#128C7E] fill-current mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookVisit}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-coral-500 text-white font-display font-semibold text-xs active:scale-95 transition-transform shadow-xs"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Visit Tour</span>
        </button>
      </div>
    </div>
  );
}
