# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


---**작성자**: @codingle2


# KNU Festival Frontend

> 강원대학교 백령대동제 프론트엔드 프로젝트

## 📋 프로젝트 개요

KNU Festival Frontend는 강원대학교 백령대동제의 정보를 제공하는 모바일 우선 웹입니다.

### 🎯 주요 기능
- 📅 **타임테이블**: 4일간의 축제 일정 관리
- 📱 **모바일 최적화**: 430px 고정 너비
- ✨ **애니메이션**: 순차적 카드 등장 효과
- 🎨 **글래스모피즘 UI**: 현대적인 디자인

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Fonts**: Google Fonts (Hahmlet)

## 📁 프로젝트 구조 (예시)

```
KNU_Festival_Frontend/
├── public/
│   └── assets/
│       └── BG.png                 # 타임테이블 배경 이미지
├── src/
│   ├── components/
│   │   ├── Timetable.tsx          # 타임테이블 메인 컴포넌트
│   │   └── TimelineCard.tsx       # 타임테이블 카드 컴포넌트
│   ├── App.tsx                    # 메인 앱 컴포넌트
│   ├── main.tsx                   # 앱 진입점
│   └── index.css                  # 글로벌 스타일
├── package.json
├── vite.config.ts
└── README.md
```

## 🛠️ 개발 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd KNU_Festival_Frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```


## 🎯 컴포넌트 분리 가이드

### 1. 단일 책임 원칙 (SRP)
각 컴포넌트는 하나의 명확한 책임을 가져야 합니다.

### 2. 재사용 가능한 컴포넌트 설계
공통 UI 요소는 재사용 가능한 컴포넌트로 분리합니다.

### 3. 커스텀 훅으로 로직 분리
복잡한 상태 관리나 사이드 이펙트는 커스텀 훅으로 분리합니다.

## 🎨 스타일링 가이드

### Tailwind CSS 클래스 네이밍
```tsx
// 레이아웃
className="flex items-center justify-between"
className="w-full max-w-[430px]"

// 색상
className="text-[#285100]" // 주 색상
className="bg-white/60"    // 반투명 카드 배경

// 애니메이션
className="transition-all duration-300 ease-out"
className="hover:scale-102"
```

### 반응형 디자인
모바일 우선 접근법을 사용합니다.

## 📊 성능 최적화

### 1. 이미지 최적화
- WebP 형식 사용 고려
- 지연 로딩 적용
- 반응형 이미지 사용

### 2. 번들 크기 최적화
- 필요한 컴포넌트만 import
- 동적 import 사용

## 📝 코딩 컨벤션

### 파일 네이밍
- 컴포넌트: PascalCase (예: `Timetable.tsx`)
- 훅: camelCase with 'use' prefix (예: `useTimetableAnimation.ts`)
- 유틸리티: camelCase (예: `formatTime.ts`)

### 컴포넌트 구조
```tsx
// 1. Import 문
import React, { useState, useEffect } from 'react';

// 2. 타입 정의
interface Props {
  // props 타입 정의
}

// 3. 컴포넌트 정의
const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  // 4. 상태 정의
  const [state, setState] = useState(initialValue);
  
  // 5. 사이드 이펙트
  useEffect(() => {
    // effect 로직
  }, [dependencies]);
  
  // 6. 렌더링
  return (
    <div>
      {/* JSX 내용 */}
    </div>
  );
};

// 7. Export
export default ComponentName;
```

## 🔄 Git 워크플로우

### 브랜치 전략
- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/기능명`: 기능 개발 브랜치
- `hotfix/버그명`: 긴급 수정 브랜치

### 커밋 메시지 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 과정 또는 보조 도구 변경
```

## 🚀 배포 가이드

```bash
# 빌드
npm run build

# 빌드 결과 확인
npm run preview

# 배포
# 빌드된 dist 폴더를 웹 서버에 업로드
```

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vite 가이드](https://vitejs.dev/guide/)

---

**작성자**: @Kim-jaeyeon
