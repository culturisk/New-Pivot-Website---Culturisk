import React, { useState } from 'react';
import { NavTab } from '../types';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'roi-quiz', label: 'ROI Quiz' },
    { id: 'resources', label: 'Resources & Insights' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group select-none"
            id="header-logo-button"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#004b93] to-[#0A66C2] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-xl tracking-tighter">C</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                culturisk
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] ml-0.5 inline-block"></span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#0A66C2] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-18px] left-0 right-0 h-[2.5px] bg-[#0A66C2] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-cta-quiz-button"
              onClick={() => handleNavClick('roi-quiz')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200/80"
            >
              <Sparkles className="w-4 h-4 text-[#0A66C2]" />
              <span>Take ROI Quiz</span>
            </button>
            <button
              id="header-cta-audit-button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#08529c] rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Book Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('roi-quiz')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0A66C2] rounded-md"
            >
              Quiz
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                currentTab === item.id
                  ? 'bg-blue-50 text-[#0A66C2] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-center font-semibold text-white bg-[#0A66C2] rounded-lg shadow-sm"
            >
              Book Strategy Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
