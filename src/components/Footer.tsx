import React from 'react';
import { NavTab } from '../types';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => onSelectTab('home')}
              className="flex items-center gap-2 cursor-pointer group inline-flex"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold tracking-tight text-white">culturisk</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] ml-0.5 inline-block"></span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Strategic HR marketing solutions and fully managed LinkedIn operations that elevate your employer brand, streamline recruitment, and build executive presence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0A66C2] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button 
                onClick={onOpenConsultation}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0A66C2] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Contact Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-white transition-colors">Services & Capabilities</button>
              </li>
              <li>
                <button onClick={() => onSelectTab('roi-quiz')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>LinkedIn Leakage Quiz</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#0A66C2] text-white rounded">FREE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('resources')} className="hover:text-white transition-colors">Resources & Insights</button>
              </li>
              <li>
                <button onClick={() => onSelectTab('case-studies')} className="hover:text-white transition-colors">TechStream Case Study</button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Managed Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]"></span>
                <span>LinkedIn Operations & Page Management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]"></span>
                <span>Recruitment Marketing & Jobs Lifecycle</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]"></span>
                <span>Employer Brand & Culture Storytelling</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]"></span>
                <span>C-Suite Ghostwriting & LinkedIn Events</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Culturisk Marketing Agency. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onSelectTab('contact')} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <button onClick={() => onSelectTab('contact')} className="hover:text-slate-300 transition-colors">Terms of Service</button>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-0.5">
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button onClick={() => onSelectTab('contact')} className="hover:text-slate-300 transition-colors">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
