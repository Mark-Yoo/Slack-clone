# 개발 중 관련 내용 및 배운 내용

---

## Setting

Dependencies

- React, react-dom
- typescript
- @types/react, @types/react-dom

devDependencies

- eslint
- prettier
- eslint-config-prettier (prettier와 eslint를 연결하기 위한 dependency)
- eslint-plugin-prettier (prettier와 eslint를 연결하기 위한 dependency)
- webpack-dev-server : PROXY 서버 역할과 핫로딩, CORS 에러를 해결할 수 있도록 설치
- @types/webpack-dev-server
- Fork-ts-checker-webpack-plugin : 타입스크립트는 코드를 블로킹 방식으로 검사하는데 이 플러그인은 웹펙의 실행과 타입스크립트 코드 검사를 동시에 할 수 있도록 해준다.

## Structure

- pages - 서비스 페이지
- components - 자잘한 컴포넌트
- layouts - 공통 레이아웃
- typings

## index.html이 필수인 이유

구글의 권장사항에 index.html은 필수적으로 검색엔진이 확인하는 곳이므로 index.html 페이지가 존재해야 한다고 명시하고 있다.

