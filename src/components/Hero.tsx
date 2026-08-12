import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  ArrowDown,
  Building2,
  Cpu,
  Leaf
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.heroBgImage}
          alt="Automotive Interior Components Background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>자동차 내장 부품 & NVH 흡음·차음 기술 전문기업</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              자동차 실내 공간의 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
                최고 가치와 미관
              </span>
              을 창출합니다
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-white font-semibold">(주)케이앤에스 (K&S)</strong>는 2000년 설립 이래, Head-Lining 모듈, NVH 흡음·차음 부직포 및 고품격 내장 트림류를 생산하고 있습니다. 
              폐기물 저감 프로세스와 MES 스마트 공장 시스템을 기반으로 자동차 내장 부품 산업을 선도합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('overview')}
                id="hero-overview-btn"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>회사소개 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                id="hero-products-btn"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 backdrop-blur-md flex items-center gap-2 transition-all"
              >
                <span>주요제품 둘러보기</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium">ISO-9001 인증</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium">중국 CQC 인증</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium">MES 생산관리</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Leaf className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs font-medium">친환경 폐기물 저감</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded-full border border-blue-800">
                  핵심 양산 품목
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Head-Lining Module & NVH
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                승객석 천장 일체형 헤드라이닝 모듈 및 자동차 정숙성을 높이는 흡음/차음 인슐레이터를 정밀 열수정 공법으로 생산합니다.
              </p>
              <button
                onClick={() => onNavigate('products')}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>제품 라인업 보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  2000년
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  회사 설립 (설립 24년차)
                </div>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Tier-2
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  RSM SES 공식 인증
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onNavigate('overview')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="text-xs font-medium">아래로 스크롤하여 회사소개 보기</span>
            <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
