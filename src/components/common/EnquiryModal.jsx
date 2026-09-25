import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { schoolConfig } from '../../config/schoolConfig';
import { Sparkles, Calendar, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export function EnquiryModal({ isOpen, onClose, preselectedProgram }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    program: preselectedProgram?.name || 'Nursery',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger subtle celebratory confetti burst
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F26440', '#0E7C7B', '#F7B801', '#2A9D8F'],
      });
    } catch {
      // Fallback silently if canvas not available
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Little Veda Admissions! My name is ${formData.parentName || 'Parent'}. I would like to enquire about admission for my child ${formData.childName || ''} for ${formData.program}. Preferred visit date: ${formData.preferredDate || 'Upcoming weekend'}.`;
    const url = `https://wa.me/${schoolConfig.contact.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? 'Visit Scheduled!' : 'Book a Campus Visit & Tour'}
      maxWidth="max-w-lg"
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs sm:text-sm text-brand-charcoal/80 mb-4">
            We would love to welcome you and your little learner to our Visakhapatnam campus. Please share your details below:
          </p>

          <div className="space-y-1">
            <label className="text-xs font-display font-semibold text-brand-slate block">
              Parent's Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sravani Varma"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-display font-semibold text-brand-slate block">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98480 22334"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-display font-semibold text-brand-slate block">
                Child's Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Reyansh"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-display font-semibold text-brand-slate block">
                Program of Interest
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
              >
                <option value="Playgroup">Playgroup (1.5 – 2.5y)</option>
                <option value="Nursery">Nursery (2.5 – 3.5y)</option>
                <option value="Junior KG (LKG)">Junior KG (3.5 – 4.5y)</option>
                <option value="Senior KG (UKG)">Senior KG (4.5 – 6y)</option>
                <option value="Extended Daycare">Extended Daycare (1.5 – 6y)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-display font-semibold text-brand-slate block">
                Preferred Visit Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-display font-semibold text-brand-slate block">
              Any special questions or dietary preferences?
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Vegetarian meal plans, potty training guidance..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-coral-500 focus:border-brand-coral-500 bg-stone-50/50"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={Calendar}
            >
              Confirm Tour Request
            </Button>

            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#128C7E] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Or connect instantly via WhatsApp</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-full bg-brand-sprout-50 text-brand-sprout flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h4 className="font-display font-bold text-2xl text-brand-slate mb-2">
            Thank You, {formData.parentName || 'Parent'}!
          </h4>

          <p className="text-sm text-brand-charcoal/80 mb-6 leading-relaxed">
            We have received your campus visit request for <strong>{formData.childName || 'your child'}</strong> ({formData.program}). Our admissions coordinator will reach out at <strong>{formData.phone}</strong> shortly to confirm your scheduled time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="whatsapp"
              size="md"
              onClick={handleWhatsAppRedirect}
              icon={MessageCircle}
            >
              Open in WhatsApp
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={handleReset}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
