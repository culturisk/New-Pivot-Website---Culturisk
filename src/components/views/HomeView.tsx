import React, { useState } from 'react';
import { NavTab } from '../../types';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../../data/mockData';
import { OperationsDashboardWidget } from '../visuals/OperationsDashboardWidget';
import { ServiceMockupVisual } from '../visuals/ServiceMockupVisual';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Send, 
  Star, 
  ShieldCheck, 
  Building2, 
  HelpCircle,
  Briefcase
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0A66C2] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0A66C2] animate-pulse"></span>
              <span>100% Fully Managed LinkedIn Operations</span>
            </div>

            {/* Main Headline with Custom Blue Underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Stop Managing Content.{' '}
              <span className="relative inline-block text-slate-900">
                Run Your LinkedIn.
                {/* Thick Blue Underline as in design */}
                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#0A66C2]/20 -z-10 rounded-sm"></span>
                <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#0A66C2] rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Strategic HR marketing solutions and fully managed LinkedIn operations that elevate your employer brand, streamline recruitment, and build executive presence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-take-quiz-cta"
                onClick={() => onSelectTab('roi-quiz')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Take ROI Quiz</span>
              </button>

              <button
                id="hero-view-services-cta"
                onClick={() => onSelectTab('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 shadow-sm transition-all duration-200"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Bullet trust factors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Recruiter Admin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+156% Inbound Flow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>C-Suite Ghostwriting</span>
              </div>
            </div>

          </div>

          {/* Hero Right Widget */}
          <div className="lg:col-span-6 relative">
            <OperationsDashboardWidget />
          </div>

        </div>
      </section>

      {/* 2. TRUSTED BY LOGO / BRAND STRIP */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Trusted by Talent Leaders at Forward-Thinking Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <div className="w-6 h-6 rounded bg-[#0A66C2] text-white flex items-center justify-center text-xs">TS</div>
              <span>TechStream</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <div className="w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center text-xs">NX</div>
              <span>Nexus Solutions</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <div className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center text-xs">CM</div>
              <span>CloudMatrix</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <div className="w-6 h-6 rounded bg-sky-600 text-white flex items-center justify-center text-xs">FG</div>
              <span>FinGlobal</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <div className="w-6 h-6 rounded bg-violet-600 text-white flex items-center justify-center text-xs">BH</div>
              <span>BioHealth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE REAL COST OF DIY LINKEDIN (Comparative Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Operational Efficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Real Cost of DIY LinkedIn
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Having recruiters design graphics and executives struggle for weekly posts costs more than a dedicated managed operations team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: In-House Struggle */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-sm relative overflow-hidden space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>The In-House Struggle</span>
              </div>
              <span className="text-xs font-semibold text-rose-600">High Leakage</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Recruiters Wasting 15+ Hours Weekly on Design & Admin
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When high-earning talent specialists spend hours in Canva, writing LinkedIn copy, and waiting for approvals, candidate vetting stalls.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Inconsistent Cadence:</strong> Sporadic job posts when vacancies become urgent emergencies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Low-Converting Assets:</strong> Text-heavy bullet points that fail to stand out against competitive offers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Executive Invisibility:</strong> Leadership lacks bandwidth to produce regular thought leadership.</span>
              </li>
            </ul>

            <div className="bg-rose-50/60 rounded-xl p-3.5 border border-rose-100 text-xs text-rose-800 font-medium">
              Average Annual Waste: <strong>~$45,000 per recruiter</strong> in diverted capacity.
            </div>
          </div>

          {/* Card 2: Managed Operations (Culturisk) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#0A66C2] shadow-lg relative overflow-hidden space-y-5">
            <div className="absolute top-0 right-0 bg-[#0A66C2] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Recommended Model
            </div>

            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
                <span>Managed Operations (Culturisk)</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Turnkey Execution with Zero Recruiter Downtime
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We handle entire campaign lifecycles, creative carousels, and C-Suite ghostwriting while your team focuses 100% on hiring top performers.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Consistent Weekly Rhythm:</strong> Multi-format content calendars pre-scheduled and approved in advance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">+156% Inbound Flow:</strong> High-impact visual culture stories that attract pre-vetted top talent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">15-Min Ghostwriting:</strong> 1 short monthly voice note powers 8+ executive thought leadership posts.</span>
              </li>
            </ul>

            <div className="bg-blue-50/80 rounded-xl p-3.5 border border-blue-200 text-xs text-blue-900 font-semibold flex items-center justify-between">
              <span>Avg Recruiter Time Recaptured:</span>
              <span className="text-[#0A66C2] font-bold text-sm">120 hrs / quarter</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. "IS YOUR TEAM LEAVING MONEY ON THE TABLE?" BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0A2540] to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Glow backdrop */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#0A66C2]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                Interactive Audit Tool
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Is your team leaving money on the table?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Take our 2-minute Operational Leakage Assessment to discover exactly how many HR hours and dollars your organization loses to ad-hoc LinkedIn management.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                id="banner-calculate-leakage-btn"
                onClick={() => onSelectTab('roi-quiz')}
                className="w-full py-3.5 px-6 bg-[#0A66C2] hover:bg-[#08529c] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Your LinkedIn Leakage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-colors text-center"
              >
                Book 1-on-1 Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW GRID (4 Core Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">What We Deliver</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              End-to-End Managed LinkedIn Operations
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A66C2] hover:underline"
          >
            <span>Explore all services & capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Mockup Header */}
                <ServiceMockupVisual type={service.imageType} />

                {/* Service Details */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Capabilities:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.coreCapabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectTab('services')}
                  className="w-full py-2.5 text-xs font-semibold text-[#0A66C2] bg-blue-50/70 hover:bg-blue-100 rounded-lg transition-colors text-center"
                >
                  View Details & Case Examples
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">Verified Impact</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Trusted by Leading Talent & HR Executives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img 
                      src={t.avatarUrl} 
                      alt={t.author} 
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{t.author}</div>
                      <div className="text-[11px] text-slate-500">{t.role}, {t.company}</div>
                    </div>
                  </div>
                  {t.highlightMetric && (
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      {t.highlightMetric}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onSelectTab('case-studies')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:underline"
            >
              <span>Read the full TechStream Case Study (+156% Qualified Candidates)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. STAY AHEAD OF THE CURVE (Newsletter Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">Bi-Weekly Playbook</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Stay Ahead of the Talent Acquisition Curve
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Join 4,200+ HR leaders receiving actionable frameworks on employer branding, executive ghostwriting, and LinkedIn recruitment ops.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[360px]">
            {newsletterSubscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>You're subscribed! Check your inbox for the latest Talent Playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold text-sm rounded-xl shadow transition-colors flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">Zero fluff. Unsubscribe anytime in 1-click.</p>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
