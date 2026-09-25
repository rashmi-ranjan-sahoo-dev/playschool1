import React, { useState } from 'react';
import { Preloader } from './components/feedback/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { EnquiryModal } from './components/common/EnquiryModal';
import { SignInModal } from './components/common/SignInModal';

import { ErrorBoundary } from './components/common/ErrorBoundary';

// Homepage Sections (Program, Activity, and FAQs removed as requested)
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { AboutSection } from './sections/AboutSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { GallerySection } from './sections/GallerySection';
import { TeachersSection } from './sections/TeachersSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { BlogSection } from './sections/BlogSection';
import { AdmissionsCTASection } from './sections/AdmissionsCTASection';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleOpenVisitModal = (program = null) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-800 font-body flex flex-col selection:bg-[#f57f25]/20 selection:text-[#f57f25]">
      {/* 00: Initial Branded Preloader */}
      <Preloader />

      {/* 01: Header with Smooth Animations & Direct Links */}
      <Navbar onBookVisit={() => handleOpenVisitModal()} />

      {/* Main Content Sections */}
      <ErrorBoundary>
        <main id="main-content" className="flex-grow">
          {/* 02: Hero Section Slider */}
          <HeroSection onBookVisit={() => handleOpenVisitModal()} />

          {/* 03: Quick Services Bar (.padT50 .padB20 .theme-border-bottom) */}
          <StatsSection />

          {/* 04: About Section with 6 Solid Color Boxes & 50/50 Slider */}
          <AboutSection onEnquireClick={() => handleOpenVisitModal()} />

          {/* 05: Purple Themed Facilities Showcase (#907ee2) */}
          <FacilitiesSection onBookVisit={() => handleOpenVisitModal()} />

          {/* 06: Asymmetric 4-Slot Gallery with Colored Hover Overlays */}
          <GallerySection />

          {/* 07: Our Staff on Light Grey Background (#f5f5f5) */}
          <TeachersSection />

          {/* 08: Parents Feedback with Video Triggers */}
          <TestimonialsSection />

          {/* 09: Our Blog Section with Infinite Auto-Scroller */}
          <BlogSection />

          {/* 10: Orange Contact Us Banner Strip (#f57f25) */}
          <AdmissionsCTASection onBookVisit={() => handleOpenVisitModal()} />
        </main>
      </ErrorBoundary>

      {/* 12: Dark 4-Column Footer (#181818) */}
      <Footer />

      {/* 13: Sticky Mobile Thumb Action Bar */}
      <MobileActionBar onBookVisit={() => handleOpenVisitModal()} />

      {/* Campus Visit / Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        preselectedProgram={selectedProgram}
      />

      {/* Sign In Modal */}
      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
      />
    </div>
  );
}

export default App;
