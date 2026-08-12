import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  CheckCircle2,
  Building,
  Shield,
  Sparkles,
  Award,
  Factory,
  Recycle,
  Wrench,
  Check,
  ChevronRight
} from 'lucide-react';

interface CompanyOverviewProps {
  onNavigate: (sectionId: string) => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({
  onNavigate,
}) => {
  const coreCompetencies = [
    {
      title: '실내 가치 & 미관 고려 트림 생산',
      description: '운전자 및 승객이 체감하는 차량 실내 감성 품질과 안전한 인테리어 트림류를 생산합니다.',
      icon: Sparkles,
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    },
    {
      title: '폐기물 심각도 방지 (친환경 공정)',
      description: '생산 과정에서 발생하는 부직포 및 원단 스크랩을 최소화하고 자원을 선순환합니다.',
      icon: Recycle,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    },
    {
      title: 'NVH 흡음·차음 기술 및 열수정 제작소',
      description: '독자적인 열수정 제작소를 운영하여 INSULATOR 및 TRIM류의 정밀 열성형을 수행합니다.',
      icon: Wrench,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
    },
    {
      title: 'Head-Lining Module 일괄 조립',
      description: '차량 천장 모듈 전용 조립 라인을 구축하여 완성차 맞춤형 모듈을 공급합니다.',
      icon: Factory,
      color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>ABOUT (주)케이앤에스</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            회사 소개 (About Company)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            (주)케이앤에스는 최고 수준의 자동차 인테리어 부품을 창출하며, <br className="hidden sm:inline" />
            실내 정숙성(NVH)과 감성 미관, 환경 친화적 지속 가능성을 실현합니다.
          </p>
        </div>

        {/* Company Core Text Block */}
        <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl mb-16 backdrop-blur-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-900/60 text-blue-300 text-xs font-mono font-bold rounded-md border border-blue-700/50">
                (주)케이앤에스 핵심가치
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                "실내 공간의 최고 가치를 논의하고, <br className="hidden sm:inline" />
                환경과 미관을 함께 완성합니다"
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                (주)케이앤에스는 자동차 인테리어 부품 전문 제조기업으로, 차량 실내 공간의 쾌적함과 인테리어 가치를 극대화하기 위해 끊임없이 연구하고 있습니다.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                생산 현장에서는 <strong className="text-emerald-400 font-semibold">폐기물 심각도를 방지</strong>하는 친환경 제조 공정을 정착시키고, 내부 미관을 고려한 고품격 트림류 및 NVH INSULATOR, Head-Lining Module을 생산하고 있습니다.
              </p>

              {/* Key Bullet List */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>설립: 2000년 05월 (구 현내산업)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>법인명: (주)케이앤에스</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>주요품목: Head-Lining, NVH Insulator, Trim</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>품질체계: ISO 9001 / CQC / MES 구축</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('philosophy')}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-blue-600/20"
                >
                  <span>경영이념 보기</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card Showcase */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  K&amp;S Core Competency
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  ESG & SMART
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-xs font-bold text-blue-400 mb-1">01. Head-Lining Module</div>
                  <div className="text-xs text-slate-300">자동차 천장 내장 모듈 조립 라인 독자 구축 및 대량 양산</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-xs font-bold text-emerald-400 mb-1">02. NVH Insulator & Trim</div>
                  <div className="text-xs text-slate-300">열수정 제작소 운영을 통한 소음/진동 억제 차음 부직포 생산</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-xs font-bold text-indigo-400 mb-1">03. MES 생산관리 시스템</div>
                  <div className="text-xs text-slate-300">스마트공장 데이터베이스 구축으로 전공정 품질 및 재고 추적</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${comp.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {comp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
