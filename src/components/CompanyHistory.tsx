import React, { useState } from 'react';
import { HISTORY_DATA } from '../data/companyData';
import {
  Calendar,
  Sparkles,
  Award,
  Factory,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';

export const CompanyHistory: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<'all' | '2000s' | '2010s' | '2020s'>('all');

  const eraFilters = [
    { id: 'all', label: '전체 역사 (2000 ~ 현재)' },
    { id: '2000s', label: '도약기 (2000 ~ 2009)' },
    { id: '2010s', label: '성장기 (2010 ~ 2019)' },
    { id: '2020s', label: '혁신기 (2020 ~ 현재)' },
  ];

  const filteredHistory = HISTORY_DATA.filter((item) => {
    const yearNum = parseInt(item.year, 10);
    if (selectedEra === '2000s') return yearNum >= 2000 && yearNum <= 2009;
    if (selectedEra === '2010s') return yearNum >= 2010 && yearNum <= 2019;
    if (selectedEra === '2020s') return yearNum >= 2020;
    return true;
  });

  return (
    <section id="history" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>COMPANY HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            회사 연혁 (History)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            2000년 현내산업으로 출발하여 (주)케이앤에스로 도약하기까지, <br className="hidden sm:inline" />
            끊임없는 신기술 개발과 품질 혁신으로 이어온 발자취입니다.
          </p>

          {/* Era Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {eraFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedEra(filter.id as any)}
                id={`history-filter-${filter.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedEra === filter.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800 sm:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {filteredHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 z-20">
                    {item.category === 'founding' && <Sparkles className="w-4 h-4" />}
                    {item.category === 'production' && <Factory className="w-4 h-4" />}
                    {item.category === 'certification' && <Award className="w-4 h-4 text-emerald-400" />}
                    {item.category === 'innovation' && <Cpu className="w-4 h-4 text-indigo-400" />}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div
                      className={`p-6 rounded-2xl bg-slate-900/90 border transition-all duration-300 hover:scale-[1.01] ${
                        item.highlight
                          ? 'border-blue-500/60 shadow-xl shadow-blue-900/20 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {item.date}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                            주요 연혁
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
