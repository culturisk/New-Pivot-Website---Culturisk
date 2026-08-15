import React, { useState } from 'react';
import { NavTab, QuizState } from '../../types';
import { QUIZ_QUESTIONS } from '../../data/mockData';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Download, 
  Calendar, 
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';

interface RoiQuizViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const RoiQuizView: React.FC<RoiQuizViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 1,
    answers: {},
    isCompleted: false,
  });

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[quizState.currentStep - 1];

  const handleSelectOption = (optionId: string) => {
    const newAnswers = { ...quizState.answers, [quizState.currentStep]: optionId };
    
    if (quizState.currentStep < totalSteps) {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        currentStep: quizState.currentStep + 1
      });
    } else {
      // Calculate final leakage score and financial impact
      let totalLeakage = 0;
      let totalHoursWastedMonthly = 0;

      QUIZ_QUESTIONS.forEach((q) => {
        const selectedId = newAnswers[q.id];
        const option = q.options.find(opt => opt.id === selectedId);
        if (option) {
          totalLeakage += option.leakageWeight;
          totalHoursWastedMonthly += option.hoursWastedEst;
        }
      });

      const normalizedScore = Math.min(95, Math.max(35, Math.round((totalLeakage / 38) * 100)));
      const annualHours = Math.round(totalHoursWastedMonthly * 12);
      // Hourly blended cost of recruiter + design + admin ~ $75/hr
      const annualCost = Math.round(annualHours * 75);

      setQuizState({
        answers: newAnswers,
        currentStep: totalSteps,
        isCompleted: true,
        score: normalizedScore,
        hoursWasted: annualHours,
        costLoss: annualCost
      });

      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrevStep = () => {
    if (quizState.currentStep > 1) {
      setQuizState({
        ...quizState,
        currentStep: quizState.currentStep - 1
      });
    }
  };

  const handleResetQuiz = () => {
    setQuizState({
      currentStep: 1,
      answers: {},
      isCompleted: false
    });
    setReportDownloaded(false);
  };

  const handleDownloadReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadEmail) {
      setReportDownloaded(true);
    }
  };

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {!quizState.isCompleted ? (
        /* QUIZ STEPPER VIEW (Matching Image 5.png) */
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Top Quiz Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 text-xs font-bold bg-[#0A66C2] rounded-full uppercase tracking-wider">
                Operational Leakage Assessment
              </span>
              <span className="text-xs font-medium text-slate-300">
                Step {quizState.currentStep} of {totalSteps}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentQuestion.question}
            </h1>

            {currentQuestion.description && (
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
                {currentQuestion.description}
              </p>
            )}

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-2 rounded-full mt-6 overflow-hidden">
              <div 
                className="bg-[#0A66C2] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(quizState.currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Options Grid */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = quizState.answers[quizState.currentStep] === option.id;
                return (
                  <button
                    key={option.id}
                    id={`quiz-option-${option.id}`}
                    onClick={() => handleSelectOption(option.id)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between space-y-2 group ${
                      isSelected
                        ? 'border-[#0A66C2] bg-blue-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-[#0A66C2]/60 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0A66C2] transition-colors">
                        {option.title}
                      </h4>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'border-[#0A66C2] bg-[#0A66C2] text-white' 
                          : 'border-slate-300 group-hover:border-[#0A66C2]'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {option.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Bottom Nav Bar */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={handlePrevStep}
                disabled={quizState.currentStep === 1}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  quizState.currentStep === 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <span className="text-xs text-slate-400">
                Click any option to continue
              </span>
            </div>
          </div>

        </div>
      ) : (
        /* QUIZ RESULTS AUDIT REPORT VIEW */
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
          
          {/* Results Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Audit Results Generated</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Operational Leakage Assessment
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Based on your organizational parameters and current recruitment workflow.
                  </p>
                </div>

                {/* Score Pill */}
                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 text-center sm:min-w-[160px]">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Leakage Index</div>
                  <div className="text-3xl sm:text-4xl font-black text-rose-400 mt-0.5">
                    {quizState.score}/100
                  </div>
                  <div className="text-[10px] font-bold text-rose-300 uppercase tracking-wider mt-0.5">
                    {quizState.score && quizState.score > 65 ? 'High Inefficiency' : 'Moderate Inefficiency'}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Impact Grid */}
            <div className="p-6 sm:p-8 space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <Clock className="w-4 h-4 text-rose-600" />
                    <span>Hours Diverted</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-rose-900">
                    ~{quizState.hoursWasted} hrs
                  </div>
                  <p className="text-[11px] text-rose-700">
                    Lost annually in Canva design, ad-hoc copy drafting, & post scheduling.
                  </p>
                </div>

                <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    <span>Estimated Financial Waste</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-900">
                    ${quizState.costLoss?.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-amber-700">
                    Diverted recruiter payroll + emergency contingency recruiter fees.
                  </p>
                </div>

                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A66C2]">
                    <TrendingUp className="w-4 h-4 text-[#0A66C2]" />
                    <span>Potential Gain</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-900">
                    +156%
                  </div>
                  <p className="text-[11px] text-blue-700">
                    Average increase in qualified inbound applicant flow with Culturisk.
                  </p>
                </div>

              </div>

              {/* 3-Point Action Plan */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0A66C2]" />
                  <span>Recommended 3-Point Remediation Roadmap</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Decouple Recruiters from Content Creation</strong>
                      <p className="text-slate-600 mt-0.5">
                        Transition talent acquisition teams to pure candidate vetting by handing off design and editorial calendars to a managed operations team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Replace Bulleted Job Specs with Visual Culture Hooks</strong>
                      <p className="text-slate-600 mt-0.5">
                        Deploy carousel storytelling focusing on architecture, autonomy, and team culture rather than sterile 20-bullet qualification specs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Activate C-Suite Ghostwriting for Senior Pull</strong>
                      <p className="text-slate-600 mt-0.5">
                        Utilize 15-minute monthly voice notes to power executive thought leadership that pre-sells top-tier candidates before the first interview.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free 30-Min Strategy Audit</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setDownloadModalOpen(true)}
                    className="flex-1 sm:flex-initial px-4 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>Download Report (PDF)</span>
                  </button>

                  <button
                    onClick={handleResetQuiz}
                    className="p-3 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                    title="Retake Quiz"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Download Lead Capture Modal */}
          {downloadModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    Get Your Complete Audit PDF
                  </h3>
                  <button 
                    onClick={() => setDownloadModalOpen(false)}
                    className="text-slate-400 hover:text-slate-700 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                {!reportDownloaded ? (
                  <form onSubmit={handleDownloadReport} className="space-y-3">
                    <p className="text-xs text-slate-600">
                      We'll send the full breakdown with industry benchmarks, custom calculation worksheets, and case studies to your inbox.
                    </p>
                    <input
                      type="email"
                      required
                      placeholder="work.email@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0A66C2] hover:bg-[#08529c] text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Send Complete Audit PDF</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4 space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">PDF Sent to {leadEmail}!</h4>
                    <p className="text-xs text-slate-500">
                      Your customized LinkedIn Operational Leakage Report is on its way.
                    </p>
                    <button
                      onClick={() => setDownloadModalOpen(false)}
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
