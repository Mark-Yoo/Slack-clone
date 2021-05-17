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

- `Switch`를 사용하면 Route가 가능한 경로 중 하나만 선택하는 기능을 제공하므로 `Switch`를 사용하면 Route 경로 중 하나만 화면에 띄워준다.

```React
import { Link } from 'react-router-dom';
```

- React-router-dom의 Link의 사용을 더 권장하는 이유는 a 태그는 새로고침을 하는 반면 Link는 새로고침 없이 필요부분만을 바꿔주기 때문이다.

## Webpack

- 현재 사용하고 있는 방식은 로컬에서만 가능한 방식이므로 이후에 개발 단계에서는 백엔드 분들과 협력할것

## SWR

- 상태를 관리하기 위해서 redux 대신 사용할 라이브러리 (GET 특화)
- 로그인이 되어있는 경우를 가정할 때에 어디서든 로그인이 되어있는지를 확인하는 API를 사용한다. 이 때에 SWR은 화면이 전환될 때마다 새로 GET을 해오기 때문에 채팅처럼 상태가 수시로 변하는 경우에 매우 유용하다.
- 프론트와 백의 주소가 다를 경우 백에서는 쿠키를 보내줄 수 없다.

```react
import useSWR from 'swr';

// revalidate 함수를 사용하면 revalidate 될 때마다 호출할 수 있다.
// dedupingInterval을 사용하면 주기적으로 호출하지만 해당 기간동안은 캐시에서만 불러오는 방식으로 사용할 수 있다.
// mutate는 revalidate와 달리 서버에 다시 요청을 보내지 않고 가지고 있는 response.data를 data에 넣어준다.

const { data, error, revalidate, mutate } = useSWR('http://api주소', fetcher함수, {dedupingInterval: 10000})
	.then((response) => {
    mutate(response.data);
    // revalidate();
  });

```

## Gravatar

- 계정당 아바타를 생성하기 위한 라이브러리

## WebSocket

- 서버와 실시간으로 데이터를 양방향으로 통신할 수 있도록 만든 라이브러리
- 이전까지는 폴링을 사용하여 통신
- Websocket은 기본적으로 React에서 전역적인 특징을 가지는데 이 때문에 컴포넌트가 전환될 때에 연결이 끊어질수도 있으므로 이를 hook으로 만들어 활용
- 구형 브라우저에서 가끔 소켓이 없는 경우가 있으나 보통 최신 브라우저들은 소켓을 가지고 있으므로 폴링을 건너뛰고 바로 웹소켓을 사용하도록 설정하는 것도 가능
- Socket.io는 websocket에서 지원하지 않는 buffer를 지원해주어 연결이 되지 않아 데이터가 전송되지 않는 상태더라도 데이터를 저장해주는 기능도 지원한다.

## react-custom-scrollbars

- 커스텀 스크롤바를 지원해주는 라이브러리
- div 태그와 같이 wrapper 역할을 해줄 수 있음

## Day.js

- Moment.js 보다 가볍고 리액트의 기본 모토인 불변성을 지켜주므로 최근 핫한 라이브러리
-



