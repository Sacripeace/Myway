# MyWay - 웹 이력서 프로젝트

**React**와 **Vite**로 제작된 현대적이고 반응형 웹 이력서입니다. 프리미엄 애니메이션과 깔끔한 디자인을 특징으로 하며, 저의 경력, 기술 스택, 포트폴리오 프로젝트를 시각적으로 매력적인 방식으로 보여줍니다.

## 🚀 주요 기능

*   **프리미엄 UI/UX**: **TailwindCSS**를 사용하여 미적 감각이 돋보이는 디자인을 구현했습니다.
*   **인터랙티브 컴포넌트**: **Framer Motion**을 활용하여 부드러운 애니메이션과 전환 효과를 제공합니다.
*   **다크/라이트 모드**: 시스템 설정을 따르며, 사용자의 선택을 로컬 스토리지에 저장하여 유지하는 테마 토글 기능을 완벽하게 지원합니다.
*   **반응형 디자인**: 모바일, 태블릿, 데스크탑 등 모든 기기에 최적화되어 있습니다.
*   **커스텀 아이콘**: 다양한 기술 스택에 대한 고품질 SVG 아이콘(Devicon, Microsoft, LobeHub 등)을 통합했습니다.
*   **데이터 기반 렌더링**: 경력 및 스킬 섹션은 데이터 기반으로 구현되어 있어 업데이트가 간편합니다.

## 🛠️ 기술 스택 (Tech Stack)

### Core
*   **React (v19)**: 사용자 인터페이스를 만들기 위한 라이브러리
*   **Vite**: 빠른 개발 및 빌드를 위한 차세대 프론트엔드 툴

### Styling & Animation
*   **Tailwind CSS**: 빠른 UI 개발을 위한 유틸리티 우선 CSS 프레임워크
*   **Framer Motion**: 리액트용 프로덕션 레디 모션 라이브러리
*   **Lucide React**: 깔끔하고 일관된 아이콘 세트

### Deployment
*   **GitHub**: 버전 관리 및 코드 호스팅
*   **GitHub Pages**: 정적 사이트 호스팅 (배포 준비 완료)

## 📂 프로젝트 구조

```
myresume/
├── public/              # 정적 자산 (이미지, 벡터 등)
├── src/
│   ├── assets/          # 프로젝트 관련 이미지
│   ├── components/      # 재사용 가능한 React 컴포넌트
│   │   ├── ui/          # UI 전용 컴포넌트 (예: ThemeToggle)
│   │   ├── Contact.jsx  # 연락처 섹션
│   │   ├── Experience.jsx # 경력 타임라인
│   │   ├── Hero.jsx     # 소개 및 Hero 섹션
│   │   ├── Projects.jsx # 포트폴리오 프로젝트 하이라이트
│   │   └── Skills.jsx   # 기술 스킬 그리드 (아이콘 포함)
│   ├── App.jsx          # 메인 애플리케이션 컴포넌트
│   ├── main.jsx         # 엔트리 포인트
│   └── index.css        # 전역 스타일 및 Tailwind 설정
├── package.json         # 프로젝트 의존성 및 스크립트
├── tailwind.config.js   # Tailwind CSS 설정
└── vite.config.js       # Vite 설정
```

## 📝 섹션 개요

1.  **Hero Section**: 자기소개 및 소셜 링크를 포함한 도입부입니다.
2.  **Experience**: 역할, 회사, 주요 성과를 포함한 상세한 경력 타임라인입니다.
3.  **Skills**: 프론트엔드, 백엔드, DevOps 등 카테고리별 기술 스킬을 커스텀 아이콘과 함께 보여줍니다.
4.  **Projects**: 주요 프로젝트를 소개하며 포트폴리오(PDF/PPT 뷰어)로 바로 연결되는 링크를 제공합니다.
5.  **Contact**: 연락처 정보를 담은 깔끔한 푸터입니다.

## 💻 시작하기 (Getting Started)

이 프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요.

### 필수 조건
*   Node.js (v18 이상 권장)
*   npm 또는 yarn

### 설치 방법

1.  레포지토리 클론:
    ```bash
    git clone https://github.com/Sacripeace/Myway.git
    cd Myway
    ```

2.  의존성 설치:
    ```bash
    npm install
    ```

3.  개발 서버 실행:
    ```bash
    npm run dev
    ```

4.  브라우저에서 `http://localhost:5173`으로 접속합니다.

## 📦 배포 빌드 (Build for Production)

배포용 빌드를 생성하려면 다음 명령어를 실행하세요:

```bash
npm run build
```

`dist` 디렉토리에 정적 파일들이 생성됩니다.