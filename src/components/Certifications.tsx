import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/companyData';
import { CertificationItem } from '../types';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Maximize2,
  X,
  Building2,
  FileCheck2,
  BadgeCheck
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & QUALITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            인증 현황 (Certifications)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            국제 품질 규격 ISO 9001 및 글로벌 완성차 품질 평가 기준을 통과하여 <br className="hidden sm:inline" />
            신뢰할 수 있는 자동차 부품을 생산합니다.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/60 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {cert.badgeCode}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{cert.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs text-blue-300 font-semibold mb-3">
                  {cert.subtitle}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">발급기관: {cert.issuer}</span>
                <button
                  onClick={() => setActiveCert(cert)}
                  className="p-2 rounded-lg bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                  title="인증서 상세보기"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Detail Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto flex items-center justify-center shadow-lg">
                <BadgeCheck className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                {activeCert.badgeCode}
              </span>
              <h3 className="text-2xl font-extrabold text-white">{activeCert.title}</h3>
              <p className="text-xs text-slate-400">{activeCert.subtitle}</p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-700/50">
                <span className="text-slate-400">인증 획득 시기</span>
                <span className="font-bold text-white">{activeCert.year}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-700/50">
                <span className="text-slate-400">인증 / 평가 기관</span>
                <span className="font-bold text-white">{activeCert.issuer}</span>
              </div>
              <div className="py-2">
                <span className="text-slate-400 block mb-1">인증 개요 및 의의</span>
                <p className="text-slate-200 leading-relaxed">{activeCert.description}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
