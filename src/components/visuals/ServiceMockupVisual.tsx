import React from 'react';
import { 
  Building2, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Share2, 
  ThumbsUp, 
  MessageSquare,
  Award,
  Video,
  Flame
} from 'lucide-react';

interface ServiceMockupProps {
  type: 'recruitment-post' | 'webinar-banner' | 'thought-leadership' | 'linkedin-event';
}

export const ServiceMockupVisual: React.FC<ServiceMockupProps> = ({ type }) => {
  if (type === 'recruitment-post') {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900 via-[#0A2540] to-slate-900 rounded-xl p-5 text-white shadow-inner relative overflow-hidden group">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#0A66C2_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        {/* Header row */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-[10px] font-black">
              C
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">TechStream Careers</div>
              <div className="text-[10px] text-slate-400">Promoted • 100% Inbound</div>
            </div>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Active Campaign
          </span>
        </div>

        {/* Content Box */}
        <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-lg p-4 space-y-3">
          <div className="inline-block px-2 py-0.5 bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-blue-300 text-[10px] font-semibold rounded">
            Engineering • Remote (US / EMEA)
          </div>
          <h4 className="text-sm font-bold text-white leading-snug">
            Senior Full-Stack Engineer — Scalable Distributed Architecture
          </h4>
          <p className="text-xs text-slate-300 line-clamp-2">
            Join the team powering enterprise operations for 400+ Fortune 1000 organizations. No micro-management, 4-day flex weeks.
          </p>
          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-blue-400 font-medium">
                <ThumbsUp className="w-3 h-3" /> 248
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> 42 comments
              </span>
            </div>
            <span className="text-emerald-400 font-semibold">+156% Qualified Apply</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'webinar-banner') {
    return (
      <div className="w-full bg-gradient-to-tr from-[#024282] via-[#0A66C2] to-indigo-700 rounded-xl p-5 text-white shadow-inner relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 flex items-center justify-between mb-3">
          <span className="px-2.5 py-0.5 text-[10px] font-bold bg-white/20 backdrop-blur-md rounded-full uppercase tracking-wider flex items-center gap-1.5">
            <Video className="w-3 h-3 text-cyan-300" />
            Live LinkedIn Event
          </span>
          <span className="text-[10px] text-blue-100 font-medium">320+ Registered</span>
        </div>

        <div className="relative z-10 space-y-2">
          <h4 className="text-sm font-extrabold text-white leading-tight">
            The 2025 Talent Acquisition Playbook: From Cold InMails to Inbound Magnet
          </h4>
          <div className="flex items-center gap-2 pt-2">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
              alt="Speaker" 
              className="w-7 h-7 rounded-full border border-white/40 object-cover"
            />
            <div className="text-[11px]">
              <p className="font-semibold text-white">Sarah Jenkins • VP People</p>
              <p className="text-[10px] text-blue-200">Keynote Speaker</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'thought-leadership') {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-5 text-white border border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-xs font-bold">
              MC
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100">Michael Chen • CEO</div>
              <div className="text-[10px] text-slate-400">12,400 Followers</div>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Thought Leadership
          </span>
        </div>

        <div className="mt-3 space-y-2 text-xs text-slate-300">
          <p className="font-medium text-slate-200">
            "The companies winning the next decade aren't out-spending on headhunters; they're out-communicating on culture."
          </p>
          <div className="flex items-center gap-4 pt-2 text-[10px] text-slate-400">
            <span className="text-blue-400 font-semibold">1,840 Likes</span>
            <span>192 Reposts</span>
            <span className="text-emerald-400 font-medium">Top 1% Voice</span>
          </div>
        </div>
      </div>
    );
  }

  // linkedin-event
  return (
    <div className="w-full bg-gradient-to-r from-slate-900 to-[#0A2540] rounded-xl p-5 text-white border border-slate-700/60 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="px-2 py-0.5 text-[10px] font-bold bg-[#0A66C2] text-white rounded">
          Executive Operations
        </span>
        <span className="text-[10px] text-slate-400">Zero-Effort Ghostwriting</span>
      </div>
      <h4 className="text-xs font-bold text-slate-100 leading-snug">
        Multi-Channel C-Suite Voice: Strategic Alignment with Global Talent Pipelines
      </h4>
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
        <span className="flex items-center gap-1 text-sky-400 font-medium">
          <Sparkles className="w-3.5 h-3.5" /> 15 Min / Mo Voice Note
        </span>
        <span className="text-slate-400">100% Fully Managed</span>
      </div>
    </div>
  );
};
