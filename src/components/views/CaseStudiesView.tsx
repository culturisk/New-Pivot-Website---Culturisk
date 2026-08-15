import React, { useState } from 'react';
import { NavTab } from '../../types';
import { TECHSTREAM_CASE_STUDY } from '../../data/mockData';
import { 
  UserPlus, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Building2, 
  Sparkles,
  TrendingUp,
  Quote
} from 'lucide-react';

interface CaseStudiesViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  const [selectedCase, setSelectedCase] = useState<'techstream' | 'nexus' | 'cloudmatrix'>('techstream');

  return (
    <div className="space-y-12 lg:space-y-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Case Study Selector Pills */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelectedCase('techstream')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedCase === 'techstream'
              ? 'bg-[#0A66C2] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          TechStream (Enterprise Tech)
        </button>
        <button
          onClick={() => setSelectedCase('nexus')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedCase === 'nexus'
              ? 'bg-[#0A66C2] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          Nexus Solutions (C-Suite Ghostwriting)
        </button>
        <button
          onClick={() => setSelectedCase('cloudmatrix')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedCase === 'cloudmatrix'
              ? 'bg-[#0A66C2] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          CloudMatrix (Employer Brand Rehaul)
        </button>
      </div>

      {/* 2. Main Case Study Content (Exact Match to Image 9.png for TechStream) */}
      {selectedCase === 'techstream' ? (
        <div className="space-y-12 animate-in fade-in duration-300">
          
          {/* Header & Tags */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              {TECHSTREAM_CASE_STUDY.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 text-xs font-semibold bg-blue-50 text-[#0A66C2] border border-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {TECHSTREAM_CASE_STUDY.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {TECHSTREAM_CASE_STUDY.subtitle}
            </p>
          </div>

          {/* 3 Large Metric Cards (Matching Image 9.png) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECHSTREAM_CASE_STUDY.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl sm:text-5xl font-black text-[#0A66C2] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center">
                    {metric.icon === 'user-plus' && <UserPlus className="w-5 h-5" />}
                    {metric.icon === 'clock' && <Clock className="w-5 h-5" />}
                    {metric.icon === 'briefcase' && <Briefcase className="w-5 h-5" />}
                  </div>
                </div>

                <div className="text-base font-bold text-slate-900 pt-1">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* The Challenge & The Strategy Section (Matching Image 9.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* The Challenge Left Column */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200 inline-block">
                The Bottleneck
              </span>
              <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {TECHSTREAM_CASE_STUDY.challenge}
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span><strong>78%</strong> of inbound applicants did not meet hard technical requirements.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span><strong>65+ Days</strong> average vacancy duration for senior engineering leads.</span>
                </div>
              </div>
            </div>

            {/* The Strategy Right Column (01, 02, 03 cards) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">The Culturisk Strategy</h2>
                <span className="text-xs text-slate-500">90-Day Execution Phase</span>
              </div>

              <div className="space-y-4">
                {TECHSTREAM_CASE_STUDY.strategySteps.map((step) => (
                  <div 
                    key={step.step}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      0{step.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Testimonial Quote Block (Matching Image 9.png) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden space-y-6">
            <Quote className="w-12 h-12 text-[#0A66C2] opacity-40 absolute top-6 right-8 pointer-events-none" />
            
            <p className="text-lg sm:text-xl font-medium text-slate-200 italic leading-relaxed relative z-10 max-w-3xl">
              {TECHSTREAM_CASE_STUDY.quote.text}
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800 relative z-10">
              <img 
                src={TECHSTREAM_CASE_STUDY.quote.avatar} 
                alt={TECHSTREAM_CASE_STUDY.quote.author} 
                className="w-12 h-12 rounded-full object-cover border-2 border-[#0A66C2]"
              />
              <div>
                <div className="text-base font-bold text-white">
                  {TECHSTREAM_CASE_STUDY.quote.author}
                </div>
                <div className="text-xs text-slate-400">
                  {TECHSTREAM_CASE_STUDY.quote.role}
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : selectedCase === 'nexus' ? (
        /* Nexus Solutions C-Suite Ghostwriting Case Study */
        <div className="space-y-10 animate-in fade-in duration-300">
          <div className="space-y-3 max-w-3xl">
            <span className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
              Executive Presence & Thought Leadership
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              From Invisible C-Suite to #1 Talent Magnet in 90 Days.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              How Nexus Solutions founder Michael Chen scaled executive reach to 340K+ monthly impressions with just 15 minutes of monthly voice notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-indigo-600">340,000+</div>
              <div className="text-sm font-bold text-slate-900">Monthly Impressions</div>
              <p className="text-xs text-slate-500">Across organic C-Suite thought leadership articles and carousels.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-indigo-600">15 Min</div>
              <div className="text-sm font-bold text-slate-900">Executive Time / Mo</div>
              <p className="text-xs text-slate-500">Zero writing required by the CEO. 100% turnkey ghostwritten pipeline.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-indigo-600">8 Key Hires</div>
              <div className="text-sm font-bold text-slate-900">Direct Inbound VP Hires</div>
              <p className="text-xs text-slate-500">Senior candidates referenced CEO LinkedIn posts as primary reason for joining.</p>
            </div>
          </div>
        </div>
      ) : (
        /* CloudMatrix Case Study */
        <div className="space-y-10 animate-in fade-in duration-300">
          <div className="space-y-3 max-w-3xl">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
              Recruitment Marketing
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Cutting Cost-Per-Hire by 45% for CloudMatrix Engineering.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Eliminating external recruiter agency fees by turning internal architectural challenges into interactive hiring campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-emerald-600">-45%</div>
              <div className="text-sm font-bold text-slate-900">Cost-Per-Hire Reduction</div>
              <p className="text-xs text-slate-500">Replaced $25k headhunter fees with organic LinkedIn candidate flow.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-emerald-600">22 Days</div>
              <div className="text-sm font-bold text-slate-900">Avg Time-to-Offer</div>
              <p className="text-xs text-slate-500">Down from 58 days prior to Culturisk managed operations.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1">
              <div className="text-4xl font-black text-emerald-600">100%</div>
              <div className="text-sm font-bold text-slate-900">Acceptance Rate</div>
              <p className="text-xs text-slate-500">Every single offer extended to senior engineers was accepted.</p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Conversion Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl text-center sm:text-left">
          <h3 className="text-2xl font-bold text-slate-900">
            Achieve Similar Results for Your Organization
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Let's review your LinkedIn presence and open vacancies in a free 30-minute strategy call.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all shrink-0 flex items-center gap-2"
        >
          <span>Book Strategy Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
