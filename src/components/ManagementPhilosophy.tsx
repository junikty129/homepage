import React, { useState } from 'react';
import { PHILOSOPHY_DATA } from '../data/companyData';
import {
  Compass,
  Cpu,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ManagementPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('p1');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return Cpu;
      case 'Workflow':
        return Workflow;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Compass;
    }
  };

  const currentItem = PHILOSOPHY_DATA.find((p) => p.id === activeTab) || PHILOSOPHY_DATA[0];

  return (
    <section id="philosophy" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>MANAGEMENT PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            경영 이념 (Management Philosophy)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            (주)케이앤에스는 기술력과 효율적인 조직 구조, 정밀한 성장 로드맵을 통해 <br className="hidden sm:inline" />
            자동차 내장 부품 전문 기업으로서 미래 가치를 창출합니다.
          </p>
        </div>

        {/* 3 Philosophy Pillars Interactive Tab */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {PHILOSOPHY_DATA.map((item) => {
            const Icon = getIcon(item.iconName);
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                id={`philosophy-tab-${item.id}`}
                className={`text-left p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-800 via-slate-800/90 to-blue-950/60 border-blue-500/80 shadow-2xl shadow-blue-900/30 scale-[1.02]'
                    : 'bg-slate-800/40 hover:bg-slate-800/70 border-slate-700/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                )}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
                  Core Pillar
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {item.subtitle}
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-400">
                  <span>세부 전략 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Philosophy Detail Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentItem.title} 실천 과제</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentItem.subtitle}
              </h3>

              <div className="space-y-3 pt-2">
                {currentItem.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-700 space-y-4 text-center">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Expected Strategic Outcome
              </div>

              <div className="py-6 px-4 rounded-xl bg-blue-950/40 border border-blue-800/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-2">
                  {currentItem.keyOutcome}
                </div>
                <p className="text-xs text-slate-400">
                  선진 기술력과 표준화된 조직 기반으로 100년 기업 도약
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left text-xs">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="text-slate-400 block mb-0.5">품질 표준</span>
                  <span className="font-bold text-white">ISO 9001</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="text-slate-400 block mb-0.5">전산 시스템</span>
                  <span className="font-bold text-white">MES 구축 완료</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
