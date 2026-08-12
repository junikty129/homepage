import React, { useState } from 'react';
import { Search, X, ChevronRight, FileText, Calendar, Package, Users, Award } from 'lucide-react';
import { HISTORY_DATA, PRODUCTS_DATA, CERTIFICATIONS_DATA } from '../data/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results: Array<{ title: string; category: string; sectionId: string; description: string }> = [];

  if (query.trim().length > 0) {
    const q = query.toLowerCase();

    // History items
    HISTORY_DATA.forEach((h) => {
      if (h.title.toLowerCase().includes(q) || h.description.toLowerCase().includes(q) || h.year.includes(q)) {
        results.push({
          title: `[연혁] ${h.date} ${h.title}`,
          category: '회사연혁',
          sectionId: 'history',
          description: h.description,
        });
      }
    });

    // Products
    PRODUCTS_DATA.forEach((p) => {
      if (
        p.koreanName.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ) {
        results.push({
          title: `[제품] ${p.koreanName}`,
          category: '주요제품',
          sectionId: 'products',
          description: p.description,
        });
      }
    });

    // Certifications
    CERTIFICATIONS_DATA.forEach((c) => {
      if (c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
        results.push({
          title: `[인증] ${c.title}`,
          category: '인증현황',
          sectionId: 'certifications',
          description: c.description,
        });
      }
    });
  }

  const handleResultClick = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <Search className="w-5 h-5 text-blue-400" />
          <input
            type="text"
            autoFocus
            placeholder="검색어를 입력하세요 (예: Head-Lining, NVH, ISO, MES, 2005년...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto space-y-2">
          {query.trim().length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              궁금하신 키워드 (제품명, 인증, 연혁 등)를 검색해보세요.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              "{query}" 검색 결과가 없습니다.
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => handleResultClick(res.sectionId)}
                className="w-full text-left p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-blue-400 mb-0.5">{res.title}</div>
                  <div className="text-xs text-slate-300 line-clamp-1">{res.description}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
