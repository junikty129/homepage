import React from 'react';
import { ESG_DATA } from '../data/companyData';
import {
  Leaf,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Globe,
  HeartHandshake
} from 'lucide-react';

export const EsgManagement: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return Leaf;
      case 'Users':
        return Users;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Globe;
    }
  };

  return (
    <section id="esg" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5" />
            <span>SUSTAINABILITY MANAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ESG 경영 (ESG Management)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            (주)케이앤에스는 폐기물 심각도 방지를 위한 친환경 공정과 <br className="hidden sm:inline" />
            안전한 근로환경, 투명한 지배구조로 지속 가능한 미래를 지향합니다.
          </p>
        </div>

        {/* ESG 3 Pillar Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {ESG_DATA.map((esg, idx) => {
            const Icon = getIcon(esg.icon);
            const isEnv = esg.category === 'E';
            const isSoc = esg.category === 'S';

            const categoryBg = isEnv
              ? 'from-emerald-950/80 via-slate-900 to-slate-900 border-emerald-500/40'
              : isSoc
              ? 'from-blue-950/80 via-slate-900 to-slate-900 border-blue-500/40'
              : 'from-purple-950/80 via-slate-900 to-slate-900 border-purple-500/40';

            const iconColor = isEnv
              ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30'
              : isSoc
              ? 'bg-blue-600/20 text-blue-400 border-blue-500/30'
              : 'bg-purple-600/20 text-purple-400 border-purple-500/30';

            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${categoryBg} border rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-700/60 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {esg.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold mb-6">
                    {esg.subtitle}
                  </p>

                  <div className="space-y-3">
                    {esg.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isEnv ? 'text-emerald-400' : isSoc ? 'text-blue-400' : 'text-purple-400'
                          }`}
                        />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>실행 지표</span>
                  <span className="text-white font-bold">100% 준수 체계</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
