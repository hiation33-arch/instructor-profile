/* ============================================================
   해보는 언니 · 강사 프로필 — 콘텐츠 데이터
   ============================================================
   ★ 앞으로 내용 수정은 이 파일만 고치면 됩니다.
   - GitHub 웹사이트에서 data.js 열기 → ✏️(연필) → 수정 → Commit
   - index.html은 건드릴 필요 없음 (디자인/구조 담당)

   수정 규칙:
   - 따옴표(") 안의 글자만 바꾸기
   - 줄바꿈이 필요하면 <br> 사용
   - 항목 추가: { ... }, 덩어리를 복사해서 붙여넣기 (쉼표 주의!)
   ============================================================ */

const PROFILE = {

  /* ---------- 공통 타이틀 (커튼·푸터에 함께 반영) ---------- */
  meta: {
    title: "AI 활용 강사 · 은미",          // 브라우저 탭 + 커튼 라벨 + 푸터
    region: "경기",
    year: "2026"
  },

  /* ---------- 커튼 (첫 화면) ---------- */
  curtain: {
    hook: "<em>딸깍</em> 전에<br>뭘 생각해야 하는지,<br>그게 시작이에요",
    hint: "스크롤하면 시작합니다"
  },

  /* ---------- 히어로 ---------- */
  hero: {
    label: "이은미 · AI & DIGITAL INSTRUCTOR",
    hook: "도구 사용법보다<br><em>그 앞</em>을 가르쳐요",
    sub: "왜 하는지, 누구한테 하는지, 그걸 어떻게 말로 꺼내는지.<br>거기서 시작하면 AI는 생각보다 훨씬 잘 들어요."
  },

  /* ---------- 강의 분야 ---------- */
  fieldsSection: {
    small: "WHAT I TEACH",
    title: "세 가지로 가르쳐요",
    lead: "툴이 아니라, 쓸 줄 아는 힘을 연습하는 수업이에요."
  },
  fields: [
    {
      name: "데이터 활용",
      desc: "엑셀 7년의 감각으로 숫자를 읽고 자동화하는 법. 일일 장부·매출 분석·문서 작성을 AI와 함께 다루는 실무 중심 수업.",
      imgClass: "sky-bg",
      img: ""            // 이미지 파일명 넣으면 표시 (예: "images/field1.png")
    },
    {
      name: "AI 표현",
      desc: "글·이미지·영상, 만들고 싶은 걸 AI로 꺼내는 법. 프롬프트로 원하는 결과를 끌어내고 도구를 골라 쓰는 표현 수업.",
      imgClass: "peach-bg",
      img: ""
    },
    {
      name: "디지털 자기표현",
      desc: "내 이야기를 디지털로 정리하고 세상에 내보내는 법. 블로그·콘텐츠·포트폴리오로 나를 표현하는 자기서사 수업.",
      imgClass: "sky-bg",
      img: ""
    }
  ],

  /* ---------- 강의 배경 ---------- */
  bgSection: {
    small: "BACKGROUND",
    title: "이런 사람이에요",
    lead: "직접 해봤기 때문에, 어디서 막히는지 알아요."
  },
  creds: [
    { main: "7년 · 회계·매출 데이터 분석 실무", sub: "엑셀 기반 장부·정산·매출 분석 경력" },
    { main: "디지털배움터 보조강사", sub: "디지털 취약계층 대상 현장 교육 경험" },
    { main: "김포 평생학습관 등록 강사", sub: "자체 설계 커리큘럼 운영" },
    { main: "AI 디지털 튜터 1급", sub: "AI 활용 교육 자격 보유" },
    { main: "AI-POT 프롬프트 활용능력 1급", sub: "프롬프트 설계·활용 자격 취득" },
    { main: "장르소설 출판 7권+", sub: "종이책·전자책 / 쓰는 법을 직접 아는 강사" }
  ],

  /* ---------- 포트폴리오 ---------- */
  worksSection: {
    small: "PORTFOLIO",
    title: "말보다 이게 낫겠죠",
    lead: "강의에서 하는 것들을 직접 만들어 쓰고 있어요."
  },
  works: [
    {
      name: "Season Road",
      badge: "공모전 1차 통과",
      badgeClass: "",                 // "" = 피치 / "sky" = 하늘색
      thumbClass: "peach",
      img: "images/seasonroad.png",
      desc: "다국어 계절 관광 웹서비스. 한국관광공사 공공데이터 활용 공모전 예선 통과작.",
      link: "https://hiation33-arch.github.io/season-road"
    },
    {
      name: "STILL",
      badge: "AI 영화제 상영",
      badgeClass: "sky",
      thumbClass: "sky",
      img: "images/stillposter.png",
      desc: "MBC C&I AMCA AI 영화제 상영작 (2026.8, 서울영화센터). 기획·연출·제작 전 과정 직접 진행.",
      link: ""                        // 영상 공개 링크 생기면 여기에
    },
    {
      name: "SmartInvest",
      badge: "웹앱 · AI API",
      badgeClass: "sky",
      thumbClass: "sky",
      img: "images/smartinvest.png",
      desc: "투자 판단을 돕는 웹앱. Claude API 기반으로 직접 설계·배포.",
      link: "https://hiation33-arch.github.io/smartinvest"
    },
    {
      name: "슬라이드 가이드 시스템",
      badge: "교육 자동화 도구",
      badgeClass: "",
      thumbClass: "peach",
      img: "images/slide-gide.png",
      desc: "색상·스타일·장수만 정하면 일관된 강의 슬라이드 자동 완성.",
      link: "https://hiation33-arch.github.io/slide-guide-dashboard/"
    }
  ],

  /* ---------- 강의 철학 ---------- */
  philosophy: {
    small: "PHILOSOPHY",
    quoteLines: [
      { text: "배우기는 배웠는데,", strong: false },
      { text: "그래서 나더러", strong: true },
      { text: "뭘 하라는 거야.", strong: true }
    ],
    body: [
      "AI는 시키는 대로 해요. 문제는 뭘 시켜야 할지 모른다는 거죠.",
      "툴이 없어서가 아니에요. 왜 쓰는지, 뭘 위해 쓰는지가 먼저 없으면 AI는 그냥 신기한 것으로 끝나거든요.",
      "저는 도구 사용법보다 그 앞을 가르쳐요. 왜 하는지, 누구한테 하는지, 그걸 어떻게 말로 꺼내는지. 거기서 시작하면 AI는 생각보다 훨씬 잘 들어요."
    ]
  },

  /* ---------- CTA ---------- */
  cta: {
    title: "편하게 말 걸어보세요",
    lead: "강의 문의, 일정 협의, 궁금한 점 무엇이든.<br>부담 없이 메시지 주시면 빠르게 답드릴게요.",
    btnLabel: "💬 카카오톡으로 문의하기",
    btnLink: "https://open.kakao.com/o/sJRIHRzi"
  }
};
