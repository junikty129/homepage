import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Car,
  Bus,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Navigation,
  Copy,
  ExternalLink
} from 'lucide-react';

interface LocationAndContactProps {
  initialProduct?: string;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({
  initialProduct = '',
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: initialProduct || 'Head-Lining Module Assembly',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="location" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCATION & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            오시는 길 & 문의하기 (Location)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            (주)케이앤에스 경주 본사 공장 방문 안내 및 제품 샘플·견적 문의 안내입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Map & Address Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Map Box Placeholder with Interactive Visual Controls */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-white">K&amp;S 경주 본사 공장 위치</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3 text-blue-400" />
                  <span>{copiedAddress ? '주소 복사 완료!' : '주소 복사'}</span>
                </button>
              </div>

              {/* Styled Vector Map Simulation */}
              <div className="h-72 sm:h-80 bg-slate-950 relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

                {/* Map Roads & Marker Visual */}
                <div className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-blue-600/30 border-2 border-blue-400 flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-600/50 animate-bounce">
                    <Building className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-500/50 shadow-2xl inline-block">
                    <div className="text-sm font-extrabold text-white">(주)케이앤에스 경주 공장</div>
                    <div className="text-xs text-slate-300">{COMPANY_INFO.address}</div>
                  </div>
                </div>
              </div>

              {/* Directions Guide */}
              <div className="p-6 bg-slate-900/90 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-2">
                      <Car className="w-4 h-4" />
                      <span>자가용 이용 시</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      7번 국도 또는 동해고속도로(울산-포항) 남경주IC 출차 ➔ 외동 모화일반산업단지 방면 진입 ➔ 모화산단길 130-13 도착
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
                      <Bus className="w-4 h-4" />
                      <span>대중교통 이용 시</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      신경주역(KTX) 또는 울산 호계역/북구 ➔ 외동 모화산단 방면 시내버스 탑승 ➔ 모화산단 입구 하차 후 도보 5분
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <Phone className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <span className="text-xs text-slate-400 block">대표 전화</span>
                <span className="text-sm font-bold text-white font-mono">{COMPANY_INFO.tel}</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <Printer className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <span className="text-xs text-slate-400 block">팩스 번호</span>
                <span className="text-sm font-bold text-white font-mono">{COMPANY_INFO.fax}</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <Mail className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <span className="text-xs text-slate-400 block">이메일 문의</span>
                <span className="text-xs font-bold text-white font-mono">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Contact Form */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              제품 및 샘플 견적 문의
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              아래 양식을 작성해 주시면 담당 영업/개발팀이 빠른 시일 내에 연락드립니다.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">문의가 정상 접수되었습니다!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  (주)케이앤에스 담당자가 검토 후 기재해 주신 연락처로 조속히 안내드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      name: '',
                      company: '',
                      phone: '',
                      email: '',
                      product: 'Head-Lining Module Assembly',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    담당자 성함 <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    회사명 / 소속
                  </label>
                  <input
                    type="text"
                    placeholder="(주)완성차모빌리티"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      연락처 <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      이메일
                    </label>
                    <input
                      type="email"
                      placeholder="example@auto.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    관심 제품군
                  </label>
                  <select
                    value={formState.product}
                    onChange={(e) => setFormState({ ...formState, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Head-Lining Module Assembly">헤드라이닝 모듈 조립체</option>
                    <option value="NVH Insulator & Package">NVH 흡음·차음 인슐레이터</option>
                    <option value="Interior Trim Parts">자동차 실내 인테리어 트림류</option>
                    <option value="Electronic Drum Seal">가전/전자부품 드럼 씰</option>
                    <option value="Custom R&D Inquiry">기타/신규 기술개발 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    문의 내용 및 요구 사양
                  </label>
                  <textarea
                    rows={4}
                    placeholder="필요 수량, 적용 차종, 스펙 규격 등 세부 문의사항을 남겨주세요."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>온라인 문의 제출하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
