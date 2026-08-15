import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { RoiQuizView } from './components/views/RoiQuizView';
import { ResourcesView } from './components/views/ResourcesView';
import { CaseStudiesView } from './components/views/CaseStudiesView';
import { ContactView } from './components/views/ContactView';
import { ConsultationModal } from './components/modals/ConsultationModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState<string>('');

  const handleOpenConsultation = (context?: string) => {
    if (context) setConsultationContext(context);
    setConsultationModalOpen(true);
  };

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0A66C2]">
      {/* Global Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content View with Fade Transition */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('Home page CTA')}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('Services exploration')}
          />
        )}

        {currentTab === 'roi-quiz' && (
          <RoiQuizView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('ROI Quiz Audit Result')}
          />
        )}

        {currentTab === 'resources' && (
          <ResourcesView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('Resources & Insights')}
          />
        )}

        {currentTab === 'case-studies' && (
          <CaseStudiesView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('TechStream Case Study Review')}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => handleOpenConsultation('Direct Contact Form')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => handleOpenConsultation('Footer link')}
      />

      {/* 30-Minute Consultation & Strategy Call Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialContext={consultationContext}
      />
    </div>
  );
}
