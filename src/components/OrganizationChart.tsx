import React, { useState } from 'react';
import { ORG_TEAMS } from '../data/companyData';
import {
  Users,
  UserCheck,
  Building,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ShieldAlert,
  Sliders,
  Cpu
} from 'lucide-react';

export const OrganizationChart: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>('prod');

  const teamData = ORG_TEAMS.find((t) => t.id === selectedTeam) || ORG_TEAMS[0];

  return (
    <section id="organization" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>ORGANIZATION STRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            조직도 (Organization)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            대표이사 및 공장장 중심의 신속한 의사결정과 체계적인 4대 전문 부서 운영으로 <br className="hidden sm:inline" />
            고객만족 품질과 최고 생산성을 실현하고 있습니다.
          </p>
        </div>

        {/* Visual Org Diagram */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {/* Top Level: Representative Director (CEO) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-2xl p-5 text-center shadow-xl shadow-blue-700/30 border border-blue-400/40 relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold mb-2">
                <UserCheck className="w-3.5 h-3.5" />
                <span>최고경영자</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">대표이사</h3>
              <p className="text-xs text-blue-100 mt-1">경영전략 수립 & ESG 지속가능경영 총괄</p>
            </div>
          </div>

          {/* Connector Line 1 */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-blue-500/60" />
          </div>

          {/* Level 2: Plant Manager (공장장) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-slate-900 border-2 border-blue-500/60 rounded-2xl p-4 text-center shadow-lg relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-950 text-blue-400 text-[11px] font-bold mb-1">
                <span>현장총괄</span>
              </div>
              <h4 className="text-xl font-bold text-white">공장장</h4>
              <p className="text-xs text-slate-400">생산/품질/자재/관리 4대 핵심 부서 총괄 지휘</p>
            </div>
          </div>

          {/* Connector Line 2 & Branch */}
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-8 bg-blue-500/60" />
            <div className="w-3/4 max-w-3xl h-0.5 bg-blue-500/60 hidden md:block" />
          </div>

          {/* Level 3: 4 Core Teams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {ORG_TEAMS.map((team) => {
              const isSelected = selectedTeam === team.id;
              return (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeam(team.id)}
                  id={`org-team-btn-${team.id}`}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-slate-800 border-blue-500 shadow-xl shadow-blue-500/20 scale-[1.03]'
                      : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg text-white bg-gradient-to-r ${team.color}`}
                    >
                      {team.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                    )}
                  </div>

                  <h5 className="text-base font-bold text-white mb-1">{team.name}</h5>
                  <p className="text-xs text-slate-400 mb-3">{team.leader}</p>

                  <div className="space-y-1">
                    {team.roles.map((r, i) => (
                      <div key={i} className="text-[11px] text-slate-300 truncate flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Team Detailed Duties Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${teamData.color}`}>
                {teamData.name}
              </div>
              <span className="text-xs text-slate-400">책임자: {teamData.leader}</span>
            </div>
            <span className="text-xs text-blue-400 font-mono">K&amp;S Operational Team Overview</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Roles */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>주요 담당 영역 (Department Scope)</span>
              </h4>
              <div className="space-y-2">
                {teamData.roles.map((role, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs font-semibold text-slate-200">
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>핵심 수행 업무 (Key Responsibilities)</span>
              </h4>
              <div className="space-y-2">
                {teamData.keyTasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
