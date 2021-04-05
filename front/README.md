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
- typings - api의 타입을 지정하는 interface를 저장하기 위한 폴더

## index.html이 필수인 이유

구글의 권장사항에 index.html은 필수적으로 검색엔진이 확인하는 곳이므로 index.html 페이지가 존재해야 한다고 명시하고 있다.

## elinstrc

## prettierrc

## tsconfig

- path를 미리 설정해서 복잡한 폴더구조에서도 상대경로를 직접 찾아 입력해주는 번거로운 코드 작성을 최대한 배제해주는 것이 권장된다.

## react-router-dom

```react
import { Switch, Route, Redirect } from 'react-router-dom';
```

- `Switch`를 사용하면 Route가 가능한 경₩로 중 하나만 선택하는 기능을 제공하므로 `Switch`를 사용하면 Route 경로 중 하나만 화면에 띄워준다.

## Webpack

- 현재 사용하고 있는 방식은 로컬에서만 가능한 방식이므로 이후에 개발 단계에서는 백엔드 분들과 협력할것
- 