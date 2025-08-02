# SPRONEXT 회사 소개 웹사이트

> 비즈니스 혁신을 이끄는 전문 컨설팅 회사 SPRONEXT의 공식 웹사이트

![SPRONEXT Logo](logo.svg)

## 🚀 프로젝트 개요

SPRONEXT는 기업의 디지털 전환과 혁신을 이끄는 전문 컨설팅 회사입니다. 이 웹사이트는 회사의 전문성과 가치를 효과적으로 전달하기 위해 최신 웹 기술과 디자인 트렌드를 적용하여 제작되었습니다.

## ✨ 주요 특징

### 🎨 모던 디자인
- **2025 웹 디자인 트렌드** 적용
- **그라디언트 배경**과 글래스모피즘 효과
- **플로팅 카드 애니메이션** (6초 주기 float 효과)
- **마이크로 인터랙션**으로 사용자 경험 향상

### 📱 완전한 반응형
- **모바일 퍼스트** 접근법
- **3단계 브레이크포인트**: Desktop (1200px+), Tablet (768px), Mobile (480px)
- **터치 친화적** 인터페이스

### 🏗️ 고도화된 회사소개 섹션
- **히어로 섹션**: 강력한 가치 제안과 핵심 특징
- **회사 타임라인**: 2015년 설립부터 2025년 미래 비전까지
- **강화된 통계**: 진행률 바와 시각적 데이터 표현
- **리더십 팀**: CEO 프로필과 전문 분야
- **기업 문화**: 3대 핵심가치와 실천사항
- **CTA 섹션**: 상담 신청과 자료 다운로드

### ⚡ 성능 최적화
- **접근성 고려**: `prefers-reduced-motion` 지원
- **고해상도 디스플레이** 최적화
- **시맨틱 HTML** 구조
- **CSS Grid & Flexbox** 레이아웃

## 🛠️ 기술 스택

- **Frontend**: Vue.js 3 (CDN)
- **Styling**: CSS3 (Grid, Flexbox, Animations)
- **Fonts**: Google Fonts (Roboto)
- **Development**: http-server
- **Version Control**: Git & GitHub

## 📦 설치 및 실행

### 필요 조건
- Node.js (14.0.0 이상)
- npm (6.0.0 이상)

### 설치 과정

1. **리포지토리 클론**
```bash
git clone https://github.com/haeseoky/spronext-website.git
cd spronext-website
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:8080
```

### 스크립트 명령어

```bash
# 개발 서버 실행 (포트 8080, 자동 오픈)
npm run dev

# 빌드 (정적 웹사이트이므로 별도 빌드 불필요)
npm run build
```

## 📂 프로젝트 구조

```
spronext-website/
├── index.html              # 메인 HTML 파일
├── app.js                  # Vue.js 애플리케이션 로직
├── style.css               # 메인 스타일시트
├── logo.svg                # 회사 로고
├── package.json            # 프로젝트 설정 및 의존성
├── package-lock.json       # 의존성 잠금 파일
├── README.md               # 프로젝트 문서
└── assets/                 # 이미지 및 기타 자산
    ├── KakaoTalk_Photo_2025-07-20-23-12-50.jpeg
    └── KakaoTalk_Photo_2025-07-20-23-13-04.jpeg
```

## 🎯 주요 섹션

### 1. 히어로 섹션
- 강력한 첫인상과 명확한 가치 제안
- 그라디언트 배경과 패턴 오버레이
- 부드러운 페이드인 애니메이션

### 2. 회사 소개 (About)
- **히어로 About**: 핵심 특징과 플로팅 카드
- **회사 스토리**: 시각적 타임라인 (2015-2025)
- **통계 섹션**: 진행률 바가 포함된 성과 지표
- **리더십 팀**: CEO 프로필과 전문 분야
- **기업 문화**: 혁신, 고객성공, 투명소통
- **CTA**: 무료 상담 신청 및 자료 다운로드

### 3. 주요 서비스
- 비즈니스 컨설팅
- 디지털 전환
- 데이터 분석
- 마케팅 전략

### 4. 비전 & 가치
- 미래 지향적 혁신
- 3대 핵심 가치

### 5. 연락처
- 이메일, 웹사이트, 주소 정보
- 깔끔한 카드 레이아웃

## 🎨 디자인 시스템

### 컬러 팔레트
```css
Primary: #1976d2 (Material Blue)
Secondary: #42a5f5, #64b5f6
Background: #f8f9fa
Accent: #e3f2fd
Dark: #263238, #37474f
```

### 타이포그래피
- **Primary Font**: Roboto (300, 400, 500, 700)
- **Hero Title**: 3.5rem → 2rem (모바일)
- **Section Title**: 2.5rem → 2rem (모바일)

### 애니메이션
- **Float Animation**: 6초 주기, 15px 움직임
- **Hover Effects**: 부드러운 변형과 그림자
- **Scroll Animations**: Intersection Observer 활용

## 📱 반응형 브레이크포인트

### Desktop (1200px+)
- 2컬럼 그리드 레이아웃
- 풀 타임라인 양방향 배치
- 4개 플로팅 카드 애니메이션

### Tablet (768px - 1200px)
- 1컬럼 중심 배치
- 타임라인 왼쪽 정렬
- 카드 크기 조정

### Mobile (≤768px)
- 세로 배치 중심
- 간소화된 플로팅 카드
- 터치 친화적 버튼 크기

### Small Mobile (≤480px)
- 최적화된 폰트 사이즈
- 콤팩트한 간격
- 세로 CTA 버튼 배치

## 🚀 배포

### GitHub Pages (권장)
1. GitHub에서 Settings → Pages로 이동
2. Source를 "Deploy from a branch" 선택
3. Branch를 "main" 선택
4. Save 클릭

### 정적 호스팅 서비스
- **Netlify**: 자동 배포 지원
- **Vercel**: GitHub 연동 배포
- **GitHub Pages**: 무료 호스팅

## 🔧 개발 가이드

### 새로운 섹션 추가
1. `index.html`에 HTML 구조 추가
2. `app.js`에 데이터 정의
3. `style.css`에 스타일링 추가
4. 반응형 브레이크포인트 확인

### 애니메이션 추가
1. CSS `@keyframes` 정의
2. `animation` 속성 적용
3. `prefers-reduced-motion` 고려

### 성능 최적화 팁
- 이미지 최적화 (WebP 권장)
- CSS 번들링 고려
- JavaScript 지연 로딩

## 📈 성과 지표

### 회사 통계 (2025년 기준)
- ✅ **150+** 성공 프로젝트
- 🏢 **80+** 파트너 기업
- ⭐ **10+** 년 경험
- 🎯 **98%** 고객 만족도

### 웹사이트 성능
- 모바일 친화적 디자인
- 5초 내 명확한 가치 전달
- 인터랙티브한 사용자 경험

## 👥 팀

### 리더십
- **송진영** - CEO & Founder
  - 글로벌 컨설팅 경험 15년
  - 전문 분야: 전략 기획, M&A, 조직 혁신
  - 연락처: jysong@spronext.com

## 📞 연락처

- **이메일**: jysong@spronext.com
- **웹사이트**: http://spronext.com
- **주소**: 서울시 서초구 서초동

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여

프로젝트 개선에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 업데이트 로그

### v1.1.0 (2025-08-02)
- ✨ 고도화된 회사소개 섹션 추가
- 🎨 모던 UI 디자인 트렌드 적용
- 📱 완전한 반응형 디자인 구현
- ⚡ 성능 최적화 및 접근성 개선

### v1.0.0 (2025-07-20)
- 🎉 초기 웹사이트 출시
- 🎨 기본 디자인 시스템 구축
- 📱 반응형 레이아웃 구현

---

**Made with ❤️ by SPRONEXT Team**

*비즈니스 혁신을 이끄는 전략적 파트너*