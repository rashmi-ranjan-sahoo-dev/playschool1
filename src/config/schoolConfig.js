/**
 * Centralized Master Brand Configuration for Little Veda
 * All campus identity, contact data, admissions info, and operational toggles are managed here.
 * No school identity values should be hardcoded in React components.
 */
export const schoolConfig = {
  brand: {
    name: "Little Veda",
    legalEntity: "Little Veda Early Learning Academy Pvt. Ltd.",
    tagline: "Little Steps, Big Dreams",
    subTagline: "Nurturing Curiosity, Compassion & Joyful Discovery",
    establishedYear: 2014,
    affiliation: "ECCE & NEP 2020 Aligned Curriculum",
    logoText: "Little Veda",
    logoSubtext: "Preschool & Daycare",
    logoSvg: "/favicon.svg",
  },

  academic: {
    currentSession: "2026–2027",
    admissionsStatus: "Open", // "Open" | "Closing Soon" | "Waitlist Only"
    admissionNotice: "Admissions Open for Academic Year 2026–27 • Book a Campus Visit",
    ageRange: "1.5 Years – 6 Years",
    timings: {
      preschool: "9:00 AM – 12:30 PM",
      daycare: "8:30 AM – 6:00 PM",
      office: "8:30 AM – 4:30 PM (Mon–Sat)",
    },
  },

  contact: {
    phone: "+91 98480 22334",
    phonePrimary: "+91 891 278 4500",
    phoneSecondary: "+91 98480 22334",
    phoneDisplay: "+91 98480 22334",
    phoneHref: "tel:+919848022334",
    emailGeneral: "admissions@littleveda.in",
    emailSupport: "care@littleveda.in",
    whatsapp: {
      number: "919848022334",
      displayNumber: "+91 98480 22334",
      prefilledMessage: "Hello Little Veda Admissions, I would like to schedule a campus tour for my child.",
      url: "https://wa.me/919848022334?text=Hello%20Little%20Veda%20Admissions%2C%20I%20would%20like%20to%20schedule%20a%20campus%20tour%20for%20my%20child.",
    },
    address: {
      street: "Plot No. 42, Veda Enclave, VIP Road",
      locality: "Siripuram / CBM Compound",
      city: "Visakhapatnam",
      district: "Visakhapatnam",
      state: "Andhra Pradesh",
      pincode: "530003",
      country: "India",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Little+Veda+VIP+Road+Visakhapatnam",
    },
  },

  socialLinks: [
    { name: "Instagram", url: "https://instagram.com/littlevedapreschool", icon: "Instagram" },
    { name: "Facebook", url: "https://facebook.com/littlevedapreschool", icon: "Facebook" },
    { name: "YouTube", url: "https://youtube.com/@littlevedapreschool", icon: "Youtube" },
    { name: "LinkedIn", url: "https://linkedin.com/company/little-veda", icon: "Linkedin" },
  ],

  features: {
    enableAnnouncementBar: true,
    enablePreloader: true,
    enableWhatsAppFloat: true,
    enablePartnersSection: true,
    enableParentTestimonialsReel: true,
  },
};
