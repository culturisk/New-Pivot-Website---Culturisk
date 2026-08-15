import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles, Building2, User, Mail, Phone, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialContext
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    companySize: '51-200',
    primaryGoal: 'operational-leakage',
    notes: initialContext ? `Context: ${initialContext}` : ''
  });
  const [selectedDate, setSelectedDate] = useState('Tomorrow at 2:00 PM EST');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#0A66C2] rounded-full">
                  Free 30-Min Strategy Call
                </span>
                <span className="text-xs text-slate-400">Zero Obligation</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                Book Your LinkedIn Operations Audit
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                We will analyze your company page, job post lifecycle, and quantify potential hours & cost saved.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent"
                    />
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Team Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  >
                    <option value="1-50">1 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="201-1000">201 – 1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Strategic Focus
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                >
                  <option value="operational-leakage">Eliminate In-House HR Content Overload</option>
                  <option value="recruitment-magnet">Increase High-Quality Inbound Applicants</option>
                  <option value="executive-brand">C-Suite Thought Leadership & Ghostwriting</option>
                  <option value="employer-brand">Full Employer Brand Transformation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Tomorrow at 2:00 PM EST', 'Thursday at 11:00 AM EST', 'Friday at 1:30 PM EST', 'Custom Schedule'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2 rounded-lg border text-left flex items-center gap-1.5 transition-colors ${
                        selectedDate === slot
                          ? 'border-[#0A66C2] bg-blue-50/80 text-[#0A66C2] font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span className="truncate">{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Confirm Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 We respect your privacy. No spam. You'll receive a calendar invite instantly.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Strategy Call Booked!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-slate-800">{formData.fullName || 'there'}</span>. We have sent a calendar invitation and pre-audit brief to <span className="font-semibold text-slate-800">{formData.workEmail || 'your email'}</span> for <span className="font-semibold text-blue-700">{selectedDate}</span>.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
              <div className="font-semibold text-slate-800">What to expect in your 30 minutes:</div>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Comprehensive review of your LinkedIn page metrics</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Concrete plan to eliminate 15+ hours of weekly HR Canva time</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Exact candidate pipeline benchmarks for your company tier</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setStep('form');
                onClose();
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors"
            >
              Done & Return to App
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
