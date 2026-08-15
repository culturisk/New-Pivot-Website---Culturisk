import React, { useState } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Calendar, 
  Users, 
  ShieldCheck, 
  ArrowUpRight, 
  Zap,
  BarChart3,
  FileCheck,
  Send
} from 'lucide-react';

export const OperationsDashboardWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'queue' | 'roi'>('pipeline');

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Window Bar */}
      <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <span className="text-xs font-semibold text-slate-300 ml-2 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Culturisk Live Operations • Enterprise Portal
          </span>
        </div>
        <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          Managed Live
        </span>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex border-b border-slate-100 bg-slate-50/70 px-4 pt-2 gap-2">
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`px-3 py-2 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'pipeline'
              ? 'bg-white text-[#0A66C2] border-t-2 border-[#0A66C2] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Operations Overview
        </button>
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-3 py-2 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'queue'
              ? 'bg-white text-[#0A66C2] border-t-2 border-[#0A66C2] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Publishing Queue (4 Scheduled)
        </button>
        <button
          onClick={() => setActiveTab('roi')}
          className={`px-3 py-2 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'roi'
              ? 'bg-white text-[#0A66C2] border-t-2 border-[#0A66C2] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Talent Inbound Metrics
        </button>
      </div>

      {/* Main Interactive Body */}
      <div className="p-5 space-y-4">
        {activeTab === 'pipeline' && (
          <div className="space-y-4">
            {/* Top 3 Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3">
                <div className="text-[11px] font-medium text-slate-600">Candidate Flow</div>
                <div className="text-xl font-bold text-[#0A66C2] mt-0.5">+156%</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> High Qualified
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                <div className="text-[11px] font-medium text-slate-600">HR Time Saved</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">120 hrs</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Per quarter / team</div>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3">
                <div className="text-[11px] font-medium text-slate-600">Cost-Per-Hire</div>
                <div className="text-xl font-bold text-emerald-700 mt-0.5">-30%</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Agency fees saved</div>
              </div>
            </div>

            {/* Current Active Workflow Box */}
            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/40">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center text-xs font-bold">
                    Q3
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Sprint 12: Principal Architecture Hiring Sprint</h5>
                    <p className="text-[10px] text-slate-500">Managed by Culturisk Operations Team</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-800 rounded-md">
                  100% On Track
                </span>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-4 gap-1.5 pt-2">
                <div className="bg-emerald-100/80 border border-emerald-200 rounded p-1.5 text-center">
                  <span className="text-[9px] font-bold text-emerald-800 block">1. Strategy</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 mx-auto mt-0.5" />
                </div>
                <div className="bg-emerald-100/80 border border-emerald-200 rounded p-1.5 text-center">
                  <span className="text-[9px] font-bold text-emerald-800 block">2. Creative</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 mx-auto mt-0.5" />
                </div>
                <div className="bg-emerald-100/80 border border-emerald-200 rounded p-1.5 text-center">
                  <span className="text-[9px] font-bold text-emerald-800 block">3. Review</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 mx-auto mt-0.5" />
                </div>
                <div className="bg-blue-100/80 border border-blue-200 rounded p-1.5 text-center animate-pulse">
                  <span className="text-[9px] font-bold text-blue-800 block">4. Distribute</span>
                  <Zap className="w-3 h-3 text-[#0A66C2] mx-auto mt-0.5" />
                </div>
              </div>
            </div>

            {/* Micro quote ticker */}
            <div className="flex items-center gap-2 p-2.5 bg-slate-900 rounded-lg text-slate-200 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-slate-400 font-medium">HR Team Status:</span>
              <span className="font-semibold text-white">0 hrs spent in Canva. 100% focused on interview closing.</span>
            </div>
          </div>
        )}

        {activeTab === 'queue' && (
          <div className="space-y-2.5">
            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#0A66C2]" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Tuesday, 10:00 AM • Carousel Post</div>
                  <div className="text-[10px] text-slate-500">"Why Senior Engineers Stay 4+ Years at TechStream" (Culture Spotlight)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded">Approved</span>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#0A66C2]" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Thursday, 2:30 PM • C-Suite Ghostwrite</div>
                  <div className="text-[10px] text-slate-500">CEO Thought Leadership: "The Non-Negotiables of Remote Leadership"</div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-800 rounded">Ready</span>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#0A66C2]" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Friday, 11:00 AM • Job Launch</div>
                  <div className="text-[10px] text-slate-500">Product Design Lead — Interactive Culture Deck</div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 rounded">In Final QA</span>
            </div>
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Direct Inbound Applications</span>
                <span className="text-[#0A66C2]">384 Applicants</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0A66C2] h-full w-[84%] rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Top 10% Match Rate: 72%</span>
                <span>Industry Avg: 18%</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Executive Profile Impressions</span>
                <span className="text-emerald-700">+340,000 / mo</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[92%] rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Zero recruiter outreach needed for senior roles</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
