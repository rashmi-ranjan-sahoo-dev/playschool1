import React, { useState } from 'react';
import { Modal } from './Modal';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

const faqsList = [
  {
    q: "What is the admission procedure at Little Veda?",
    a: "Parents can schedule a campus walk-through via our online form or WhatsApp. Following the visit, an informal friendly interaction with our early years mentor is conducted, followed by submission of the enrollment kit."
  },
  {
    q: "What is the teacher-to-child ratio in classrooms?",
    a: "We maintain a certified 1:6 ratio for Playgroup and 1:8 for Nursery and Kindergarten, ensuring personalized emotional care and attention for every child."
  },
  {
    q: "Are the campus and transportation safe?",
    a: "Yes. Our campus has 24/7 CCTV surveillance, biometric gate entry, and female attendant-supervised school vans equipped with GPS tracking."
  },
  {
    q: "Does Little Veda provide meals for daycare and preschool children?",
    a: "Yes. Our in-house pantry prepares warm, wholesome vegetarian meals and fresh seasonal fruit platters formulated by pediatric nutritionists."
  },
  {
    q: "How does Little Veda support children with separation anxiety?",
    a: "We adopt a gentle 2-week phased orientation where parents can attend short initial sessions until the toddler forms natural trusting bonds with our educators."
  }
];

export function FaqModal({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Frequently Asked Questions" maxWidth="max-w-2xl">
      <div className="space-y-3 pt-2">
        {faqsList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 text-left font-display font-bold text-sm sm:text-base text-stone-800 hover:text-[#f57f25] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#00C3C9] shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#f57f25]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
