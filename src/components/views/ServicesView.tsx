import React from 'react';
import { NavTab } from '../../types';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../../data/mockData';
import { ServiceMockupVisual } from '../visuals/ServiceMockupVisual';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  Zap,
  Calendar
} from 'lucide-react';

interface ServicesViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Operations Suite</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Services & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          End-to-end LinkedIn operations engineered specifically for HR leaders, talent teams, and high-growth executives.
        </p>
      </div>

      {/* 2. Four Core Services Grid (Matching Image 3.png & Image 17.png) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              {/* Visual Mockup Header */}
              <ServiceMockupVisual type={service.imageType} />

              {/* Service Title and Description */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Core Capabilities Checklist */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities:
                </span>
                <div className="space-y-2">
                  {service.coreCapabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0A66C2] shrink-0" />
                      <span className="font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA within card */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onOpenConsultation}
                className="text-xs sm:text-sm font-bold text-[#0A66C2] hover:text-[#08529c] flex items-center gap-1.5 transition-colors"
              >
                <span>Request Scope & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectTab('roi-quiz')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Check ROI Impact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Operational Workflow / How It Works */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">The Culturisk Cadence</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How Managed LinkedIn Operations Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            A frictionless, predictable workflow designed to require less than 30 minutes of your HR team's time per month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 className="text-sm font-bold text-white">Monthly Talent Sync</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              A 15-minute alignment on open priority headcount, culture stories, and executive goals.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 className="text-sm font-bold text-white">Asset & Story Engine</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our writers & designers craft high-impact carousels, job hooks, and ghostwritten insights.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 className="text-sm font-bold text-white">1-Click Approval</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your team reviews and approves the full month's calendar in a streamlined portal.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 className="text-sm font-bold text-white">Autopilot Distribution</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We schedule, publish, engage with comments, and monitor candidate pipeline flow.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials (Sarah Jenkins & Michael Chen) */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">Executive Proof</span>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Real Results from CHROs and Founders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div 
              key={t.id} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
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
                    <div className="text-sm font-bold text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
                {t.highlightMetric && (
                  <span className="px-2.5 py-1 text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    {t.highlightMetric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Ready to Take Inbound Recruiting to Autopilot?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Schedule a 30-minute operational audit. We’ll map out your customized talent acquisition content roadmap.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold text-sm rounded-xl shadow-md transition-colors shrink-0 flex items-center gap-2"
        >
          <span>Schedule Strategy Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
