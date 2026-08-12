import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';
import { Shield, ChevronUp, MapPin, Phone, Mail, Award, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Company Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <CompanyLogo showText={true} size="md" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              자동차 실내 인테리어 부품, Head-Lining Module 및 NVH 흡음·차음 기술 전문 제조기업. 
              최고 품질과 폐기물 저감 친환경 경영으로 고객 만족을 실현합니다.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                ISO 9001 인증
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                중국 CQC 인증
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                RSM SES Tier-2
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                MES 구축
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">주요 메뉴 바로가기</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-white transition-colors">
                  회사 소개 (About)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-white transition-colors">
                  회사 연혁 (History)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors">
                  경영 이념 (Philosophy)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('organization')} className="hover:text-white transition-colors">
                  조직도 (Organization)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
                  주요 제품 및 기술 (Products)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('esg')} className="hover:text-white transition-colors">
                  ESG 경영 (Sustainability)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">기업 정보 & 오시는길</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>TEL: {COMPANY_INFO.tel} | FAX: {COMPANY_INFO.fax}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>E-MAIL: {COMPANY_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => onNavigate('location')}
                className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
              >
                오시는 길 안내
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <span>상단으로 이동</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
