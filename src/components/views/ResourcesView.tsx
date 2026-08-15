import React, { useState } from 'react';
import { NavTab, ArticleItem } from '../../types';
import { ARTICLES_DATA } from '../../data/mockData';
import { ArticleModal } from '../modals/ArticleModal';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Send,
  Layers,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface ResourcesViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultation: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onSelectTab, onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const categories = ['All', 'LinkedIn Operations', 'Recruitment Marketing', 'Employer Brand', 'Executive Presence'];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 lg:space-y-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Talent Operations Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Resources & Insights
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Actionable frameworks, data-backed recruitment operations strategies, and employer branding guides for talent leaders.
        </p>
      </div>

      {/* 2. Filters & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#0A66C2] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search articles & guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

      </div>

      {/* 3. Articles Grid (Matching Image 7.png) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            {/* Visual Card Header */}
            <div className="h-44 bg-gradient-to-br from-slate-900 via-[#0A2540] to-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 text-[11px] font-bold bg-[#0A66C2] text-white rounded-md">
                  {article.category}
                </span>
                <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-300" />
                  {article.readTime}
                </span>
              </div>

              {/* Graphic Icon / Decorative Element */}
              <div className="relative z-10">
                <div className="text-white/80 text-xs font-mono">Culturisk Playbook Series</div>
              </div>

              {/* Subtle background glow */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#0A66C2]/20 rounded-full blur-xl" />
            </div>

            {/* Article Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A66C2] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.snippet}
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center">
                    {article.authorInitials}
                  </div>
                  <span className="font-semibold text-slate-800">{article.authorName}</span>
                </div>
                <span className="text-[#0A66C2] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="text-slate-500 text-sm">No articles found matching your filter criteria.</p>
          <button
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="text-xs font-semibold text-[#0A66C2] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* 4. Newsletter Signup Card */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            Talent Acquisition Insights
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Get Every New Playbook Directly to Your Inbox
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Zero promotional noise. Only tactical operational teardowns and recruiter capacity frameworks.
          </p>

          <div className="pt-2 max-w-md mx-auto">
            {newsletterSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl p-3 text-xs font-semibold">
                ✓ Thank you for subscribing! The next edition will land on Tuesday.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterSubmitted(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs bg-slate-800 text-white border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0A66C2] hover:bg-[#08529c] text-white font-semibold text-xs rounded-xl shadow transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={onOpenConsultation}
      />

    </div>
  );
};
