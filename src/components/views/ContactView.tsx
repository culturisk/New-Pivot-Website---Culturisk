import React, { useState } from 'react';
import { NavTab } from '../../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Send, 
  Sparkles, 
  MessageSquare,
  HelpCircle,
  Linkedin
} from 'lucide-react';

interface ContactViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'operations-audit',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'How much time does my HR team need to spend each month?',
      a: 'Less than 30 minutes total. We hold one 15-minute monthly priority alignment call, handle 100% of copywriting and design, and deliver a clean monthly approval queue for 1-click review.'
    },
    {
      q: 'How does C-Suite Ghostwriting work?',
      a: 'We capture your executives’ voice via 15-minute monthly voice interviews or Slack notes. Our specialized B2B talent ghostwriters transform them into high-performing thought leadership posts.'
    },
    {
      q: 'How quickly do we see candidate flow improvement?',
      a: 'Most clients experience a measurable increase in high-quality inbound applications within the first 30–45 days of deploying our culture storytelling assets.'
    },
    {
      q: 'Do you work alongside our existing ATS and job boards?',
      a: 'Yes. We integrate with Greenhouse, Lever, Ashby, and standard LinkedIn Recruiter pipelines to drive candidates directly to your existing hiring funnels.'
    }
  ];

  return (
    <div className="space-y-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-[#0A66C2] border border-blue-200 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let’s Talk LinkedIn Operations
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Have a question about our managed packages or ready to schedule your 30-minute operational audit? We’d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">Send an Inquiry</h2>
            <p className="text-xs text-slate-500">We respond to all talent leadership inquiries within 2 business hours.</p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@techstream.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    placeholder="TechStream Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  >
                    <option value="operations-audit">Free 30-Min Operations Audit</option>
                    <option value="pricing-scope">Pricing & Scope Inquiry</option>
                    <option value="executive-ghostwriting">C-Suite Ghostwriting Only</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">How can we help your team?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current hiring bottlenecks or LinkedIn goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. Our talent operations lead will review your company profile and get back to {formData.email} within 2 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-semibold text-[#0A66C2] hover:underline"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Contact Info & Quick Scheduler */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Schedule Card */}
          <div className="bg-gradient-to-br from-slate-900 to-[#0A2540] text-white rounded-3xl p-6 sm:p-8 space-y-4">
            <span className="px-3 py-1 text-xs font-bold bg-[#0A66C2] rounded-full uppercase tracking-wider">
              Instant Scheduling
            </span>
            <h3 className="text-xl font-bold text-white">Prefer to pick a live time slot?</h3>
            <p className="text-xs text-slate-300">
              Skip the message back-and-forth and lock in a 30-minute calendar slot with our team right away.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full py-3 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#0A66C2]" />
              <span>Open Calendar Scheduler</span>
            </button>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0A66C2]" />
                <span className="font-medium">operations@culturisk.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="font-medium">linkedin.com/company/culturisk</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0A66C2]" />
                <span>San Francisco, CA • New York, NY • London, UK</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FAQs */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">Frequently Asked Questions</span>
          <h2 className="text-2xl font-bold text-slate-900">Everything You Need to Know</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
