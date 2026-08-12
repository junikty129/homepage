import {
  CertificationItem,
  EsgItem,
  HistoryItem,
  PhilosophyItem,
  ProductItem,
  OrgTeam
} from '../types';

import heroBg from '../assets/images/hsi_hero_bg_1786499768752.jpg';
import headlinerImg from '../assets/images/hsi_headliner_1786499781993.jpg';
import nvhImg from '../assets/images/hsi_nvh_insulator_1786499795003.jpg';

export const COMPANY_INFO = {
  name: '(주)케이앤에스',
  englishName: 'K&S',
  formerName: '현내산업',
  established: '2000년 05월',
  ceo: '대표이사',
  slogan: '자동차 실내 가치와 미관을 선도하는 내장재 부품 전문기업',
  overview: `(주)케이앤에스는 자동차 인테리어 부품 전문 제조 기업으로서, 차량 실내 공간의 미관과 정숙성, 최고 가치를 지속적으로 연구·개발해 오고 있습니다. 
폐기물 발생 최소화 프로세스를 통해 환경 심각성을 방지하고, 고품질 Head-Lining 모듈, NVH 흡음·차음 부직포 및 내장 트림류를 생산하여 국내외 대표 자동차 제조사에 공급하고 있습니다.`,
  address: '경상북도 경주시 외동읍 모화산단길 130-13',
  tel: '054-774-1036',
  fax: '054-774-1035',
  email: 'kns1071@hanmail.net',
  heroBgImage: heroBg,
};

export const HISTORY_DATA: HistoryItem[] = [
  {
    id: 'h2000',
    year: '2000',
    date: '2000. 05',
    title: '회사 설립 (현내산업)',
    description: '자동차 부품 및 부직포 가공 전문 기업 현내산업으로 가치 창출 첫발을 내딛었습니다.',
    category: 'founding',
    highlight: true,
  },
  {
    id: 'h2001',
    year: '2001',
    date: '2001. 12',
    title: 'LG 전자부품 생산',
    description: 'LG 전자부품 라인용 고성능 흡음 및 차음 부직포 대량 양산 및 납품 개시.',
    category: 'production',
  },
  {
    id: 'h2003',
    year: '2003',
    date: '2003. 03',
    title: '삼성 전자부품 생산',
    description: '삼성 세탁기/가전 정밀 부품인 Drum Seal 특수 부직포 부품 생산 개시.',
    category: 'production',
  },
  {
    id: 'h2005-1',
    year: '2005',
    date: '2005. 05',
    title: '상호 변경 (현내산업 ➔ (주)케이앤에스)',
    description: '글로벌 경쟁력 강화 및 법인 전환을 위해 상호를 (주)케이앤에스(K&S)로 변경.',
    category: 'founding',
    highlight: true,
  },
  {
    id: 'h2005-2',
    year: '2005',
    date: '2005. 11',
    title: 'Head-Lining Module 조립 라인 구축',
    description: '자동차 천장 내장재 부품인 Head-Lining Module 조립 전용 라인을 구축하고 양산을 본격화하였습니다.',
    category: 'production',
    highlight: true,
  },
  {
    id: 'h2010',
    year: '2010',
    date: '2010. 07',
    title: '열수정 제작소 별도 운영',
    description: 'NVH-PKG (INSULATOR, TRIM류) 전용 열수정 성형 제작소를 독자 운영하여 고품질 트림 부품 생산 기틀 마련.',
    category: 'production',
  },
  {
    id: 'h2016',
    year: '2016',
    date: '2016. 12',
    title: '품질보증 ISO-9001(2008) 인증 획득',
    description: '국제표준 품질경영시스템 인증을 획득하여 품질보증 체계를 확립하였습니다.',
    category: 'certification',
    highlight: true,
  },
  {
    id: 'h2018-1',
    year: '2018',
    date: '2018. 06',
    title: '우수인증기업 (강소기업) 인증',
    description: '고용노동부 및 지자체 지정 강소기업 및 기술 우수인증기업으로 선정되었습니다.',
    category: 'certification',
  },
  {
    id: 'h2018-2',
    year: '2018',
    date: '2018. 07',
    title: 'RSM SES-Tier2 인증 획득',
    description: '르노삼성(RSM) 글로벌 공급망 품질 자격인 SES-Tier2 인증을 성공적으로 획득하였습니다.',
    category: 'certification',
    highlight: true,
  },
  {
    id: 'h2020',
    year: '2020',
    date: '2020. 03',
    title: 'MES 생산관리 시스템 구축',
    description: '스마트공장 실시간 MES (Manufacturing Execution System) 생산 전산 통합 관리 시스템을 전면 도입 구축했습니다.',
    category: 'innovation',
    highlight: true,
  },
  {
    id: 'h2023',
    year: '2023',
    date: '2023. 11',
    title: '중국 CQC 제품안전 자율인증 획득',
    description: '중국 품질인증센터(CQC) 제품안전 자율인증을 획득하여 해외 수출 및 안전 규격 검증을 완료하였습니다.',
    category: 'certification',
    highlight: true,
  },
];

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    id: 'p1',
    title: '신제품 개발',
    subtitle: '선진기술기지 구축 ➔ 성장의 핵심열쇠',
    iconName: 'Cpu',
    points: [
      '독자적인 핵심 R&D 기술 개발 및 지적재산권 확보',
      '차세대 친환경·경량화 인테리어 소재 독자 성형 기술',
      '미래 자율주행 및 전기차 시대를 대비한 차음/흡음 패키징'
    ],
    keyOutcome: '성장 동력 지속 창출',
  },
  {
    id: 'p2',
    title: '효율적인 조직구조',
    subtitle: '선진기업 도약 ➔ 체계적 프로세스',
    iconName: 'Workflow',
    points: [
      '비효율적인 조직 절차 개편 및 유연한 부서 간 협업',
      '국제표준 ISO 9001 기준에 부합하는 업무 정착',
      'MES 전산시스템 연동을 통한 실시간 사무/생산 자동화'
    ],
    keyOutcome: '생산성 및 품질 안정화',
  },
  {
    id: 'p3',
    title: '장기성장 로드맵 구축',
    subtitle: '신기술 개발 기반 전문기업 고도화',
    iconName: 'TrendingUp',
    points: [
      '단계별 미래 성장 전략 수립 및 정밀 실행',
      '탄소배출 및 폐기물 저감 친환경 제조 프로세스',
      '글로벌 수주 확대 및 종합 내장재 기술 전문기업 완성'
    ],
    keyOutcome: '지속 가능한 100년 기업',
  },
];

export const ORG_TEAMS: OrgTeam[] = [
  {
    id: 'prod',
    name: '생산팀',
    leader: '생산팀장',
    roles: ['Head-Lining 조립 라인', 'NVH / INSULATOR 라인', '열수정 성형 제작소'],
    keyTasks: [
      'Head-Lining Module 일괄 모듈 조립',
      '흡음·차음 부직포 열수정 및 성형 가공',
      'MES 시스템 기반 자재 로스 및 폐기물 최소화',
      '납기 준수 및 일일 생산 수수율 관리'
    ],
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'qa',
    name: '품질 / 개발팀',
    leader: '품질개발팀장',
    roles: ['ISO-9001 / CQC 품질관리', '신소재 R&D', 'RSM SES Tier2 인증관리'],
    keyTasks: [
      'ISO-9001 및 CQC 제품안전 인증 유지 검사',
      '내장재 불량률 ZERO화를 위한 초물/중물/종물 검사',
      '차세대 차음/흡음 신소재 연구 개발',
      '고객사 세부 스펙 분석 및 시험성적서 관리'
    ],
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'support',
    name: '업무지원팀',
    leader: '업무지원팀장',
    roles: ['MES 전산 운영', '원자재 SCM / 물류', '설비 보전 / 안전'],
    keyTasks: [
      'MES 전산 모니터링 및 실시간 생산 데이터 분석',
      '부직포, 원단, 수지 원자재 공급망 및 입출고 관리',
      '공장 자동화 설비 유지보수 및 작업장 환경 관리',
      '물류 효율화 및 창고 재고 최적화'
    ],
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 'admin',
    name: '관리팀',
    leader: '관리팀장',
    roles: ['경영기획 / 총무', '인사 / 재무', 'ESG 경영 / 안전보건'],
    keyTasks: [
      '중장기 경영 전략 수립 및 예산 수립',
      '직원 안전보건 체계 강화 및 중대재해 예방',
      '친환경 ESG 이행 점검 및 자원 재활용 관리',
      '고객사 협력관계 및 총무 노무 관리'
    ],
    color: 'from-purple-600 to-violet-700'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'headlining',
    name: 'Head-Lining Module Assembly',
    koreanName: '헤드라이닝 모듈 조립체',
    category: 'headliner',
    description: '자동차 승객석 천장에 장착되는 일체형 모듈 부품입니다. 주행 중 차체 진동과 외부 소음을 차단하고 강성 및 아름다운 실내 미관을 완성합니다.',
    features: [
      '경량 고강도 친환경 샌드위치 구조',
      '헤드라인 모듈 일체형 정밀 조립 기술',
      '우수한 감성 품질 및 들뜸 없는 완벽한 피팅',
      '난연성 및 내열성 국제 표준 만족'
    ],
    applications: ['승용차', 'SUV', '친환경 전기차(EV)', '상용차 천장 트림'],
    specs: {
      '주요 재질': '친환경 복합 부직포 + 섬유 표면재',
      '성형 방식': '열가공 정밀 성형 및 프레스 조립',
      '특성': '난연 1등급, 흡음/차음, 초경량',
      '품질 인증': 'ISO 9001 / CQC 인증'
    },
    image: headlinerImg,
    badge: '주력 양산 제품'
  },
  {
    id: 'nvh-insulator',
    name: 'NVH Insulator & Package',
    koreanName: 'NVH 흡음·차음 인슐레이터',
    category: 'nvh',
    description: '차량 엔진룸, 실내 바닥, 대시보드 주변의 소음(Noise), 진동(Vibration), 불쾌감(Harshness)을 유의미하게 저감하는 정밀 흡차음 패키지입니다.',
    features: [
      '열수정 전용 제작소 기술 기반 고밀도 성형',
      '광범위한 주파수 대역 소음 흡수 특성',
      '열과 습기에 강한 고내구성 펠트/부직포 소재',
      '폐기물 저감 친환경 제조 프로세스 적용'
    ],
    applications: ['엔진룸 대시 인슐레이터', '플로어 카펫 흡음재', '휠아치 차음 패키지'],
    specs: {
      '재질': '흡음 PET 부직포 / 차음 복합 레이어',
      '밀도': '밀도 가변 제어 성형 (열수정)',
      '성능': '주행 소음 최대 8dB 저감 효과',
      '인증': 'RSM SES-Tier2 인증'
    },
    image: nvhImg,
    badge: 'NVH 핵심기술'
  },
  {
    id: 'interior-trim',
    name: 'Interior Trim Parts',
    koreanName: '자동차 실내 인테리어 트림류',
    category: 'trim',
    description: '운전자 및 탑승객의 촉감과 시각적 미관을 책임지는 내장 트림류입니다. 충격 흡수 성능과 심미적 디자인을 동시 만족합니다.',
    features: [
      '우수한 표면 감성과 내마모성',
      '충돌 시 승객 안전을 고려한 충격 완화 구조',
      '유해 VOCs(휘발성유기화합물) 최소화',
      '다양한 차종별 맞춤형 열수정 가공'
    ],
    applications: ['필라 트림 (A/B/C Pillar)', '도어 내장 가스켓 트림', '트렁크 사이드 패키지'],
    specs: {
      '성형': '고온 열수정 성형 가공',
      '표면 처리': '입체 엠보싱 / 무독성 표면재',
      '환경': '저VOCs 친환경 규격'
    },
    image: nvhImg,
    badge: '고품격 미관'
  },
  {
    id: 'drum-seal',
    name: 'Electronic Drum Seal & Sub-materials',
    koreanName: '가전 및 전자부품용 드럼 씰',
    category: 'electronic',
    description: 'LG전자, 삼성전자 공급 이력을 자랑하는 정밀 전자부품 및 특수 기밀 씰링 부직포 부품입니다.',
    features: [
      '고회전 및 고온 습윤 환경에서의 탁월한 내구성',
      '미세 기밀 및 마찰 소음 차단 펠트 가공',
      '고정밀 톰슨 및 다이컷팅 가공'
    ],
    applications: ['드럼세탁기 정밀 드럼 씰', '전자부품 완충/흡음 단열재'],
    specs: {
      '주요 고객사': 'LG전자, 삼성전자 협력 공급',
      '가공 방식': '정밀 다이컷팅 / 씰링 마감'
    },
    image: headlinerImg,
    badge: '전자부품 검증'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'c1',
    title: 'ISO 9001 (2008 / Current)',
    subtitle: '품질경영시스템 국제인증',
    year: '2016. 12',
    issuer: '한국품질재단 / KFQ',
    description: '자동차 부품 제조 및 품질 관리 전 과정이 국제표준 품질 규격에 적합함을 검증받았습니다.',
    badgeCode: 'ISO 9001'
  },
  {
    id: 'c2',
    title: '중국 CQC 제품안전 자율인증',
    subtitle: 'China Quality Certification',
    year: '2023. 11',
    issuer: '중국품질인증센터 (CQC)',
    description: '글로벌 완성차 및 중국 시장 규격에 맞춘 안전성 및 유해물질 자율 검증을 완수했습니다.',
    badgeCode: 'CQC Safe'
  },
  {
    id: 'c3',
    title: 'RSM SES-Tier2 인증',
    subtitle: '르노코리아(RSM) 공급망 평가',
    year: '2018. 07',
    issuer: '르노코리아 자동차 (RSM)',
    description: '글로벌 르노-닛산-미쓰비시 연합 SES 품질 평가지표 2차 협력사 최고 수준 인정.',
    badgeCode: 'RSM Tier2'
  },
  {
    id: 'c4',
    title: '우수인증기업 (강소기업)',
    subtitle: '기술 우수 및 일자리 우수기업',
    year: '2018. 06',
    issuer: '고용노동부 / 지자체',
    description: '안정적인 경영 구조, 기술력 및 근로환경 우수성을 인정받은 강소기업.',
    badgeCode: '우수 강소기업'
  },
  {
    id: 'c5',
    title: 'MES 스마트공장 시스템',
    subtitle: '생산관리 전산 통합 시스템',
    year: '2020. 03',
    issuer: '(주)케이앤에스 전산본부',
    description: '원자재 투입부터 성형, 조립, 출하까지 전 공정 실시간 데이터베이스 기반 품질 추적 시스템 구축.',
    badgeCode: 'MES Smart'
  }
];

export const ESG_DATA: EsgItem[] = [
  {
    category: 'E',
    title: 'Environmental (친환경)',
    subtitle: '폐기물 심각성 방지 및 자원 선순환',
    points: [
      '부직포 및 섬유 자재 절단 스크랩 최소화 프로세스 도입',
      '열수정 공정 에너지 효율화 및 저탄소 가공',
      '친환경 리사이클 PET 함유 원단 확대 적용',
      '유해 물질 Zero화 (저VOCs 성형 부직포 적용)'
    ],
    icon: 'Leaf'
  },
  {
    category: 'S',
    title: 'Social (사회적 책임)',
    subtitle: '안전한 일터와 지역사회 동반성장',
    points: [
      '무재해 작업장 실현 및 주기적 안전보건교육 실시',
      '강소기업 인증 기반 양질의 지역 일자리 창출',
      '공정 거래 준수 및 협력업체와의 상생 생태계',
      '임직원 역량 강화를 위한 정기 직무 기술 교육'
    ],
    icon: 'Users'
  },
  {
    category: 'G',
    title: 'Governance (투명경영)',
    subtitle: 'ISO 9001 & MES 기반의 투명한 경영',
    points: [
      'MES 시스템을 통한 생산/재고/비용 실시간 투명 공개',
      '국제 표준 규격(ISO 9001)에 부합하는 철저한 공정 통제',
      '윤리경영 준수 및 신뢰 기반의 고객사 협력 관계',
      '중장기 로드맵에 맞춘 안정적 리스크 관리'
    ],
    icon: 'ShieldCheck'
  }
];
