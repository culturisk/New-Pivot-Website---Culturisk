import React from 'react';
import { ArticleItem } from '../../types';
import { X, Clock, User, Share2, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react';

interface ArticleModalProps {
  article: ArticleItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-50 text-[#0A66C2] rounded-full border border-blue-200">
              {article.category}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-600 border-b border-slate-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
                {article.authorInitials}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{article.authorName}</div>
                <div className="text-[11px] text-slate-500">Published on {article.publishedDate}</div>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Key Strategic Takeaways:
              </h4>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Full Paragraphs */}
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            {article.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Bottom In-Article CTA */}
          <div className="mt-8 bg-gradient-to-br from-slate-900 to-[#0A2540] rounded-xl p-6 text-white text-center space-y-3">
            <h4 className="text-lg font-bold text-white">
              Ready to Stop Wasting HR Hours on LinkedIn Content?
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Get our comprehensive team to handle your creative, copywriting, and C-suite presence with zero recruiter downtime.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold text-sm rounded-lg shadow transition-colors"
            >
              <span>Schedule Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
