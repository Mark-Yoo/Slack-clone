import React, { useState, useCallback, FC } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Link, Redirect } from 'react-router-dom';
import useInput from '@hooks/useInput';
import fetcher from '@utils/fetcher';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from '@pages/SignUp/styles';
import { validate } from 'webpack';

const LogIn: FC = () => {
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post('/api/users/login', { email, password }, { withCredentials: true })
        .then((response) => {
          // mutate(response.data, false);
          // validate를 true로 설정하게 된다면 optimistic UI는 보통 요청을 보내는 순간 요청이 성공할 거라고 확신할 때에 상태를 먼저 바꾸고 요청을 나중에 보내는 방식이다. 이 때에 나중에 검사를 다시 거치게 된다.
          revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [email, password],
  );

  if (data === undefined) {
    return <div>로딩중...</div>;
  }
  if (data) {
    return <Redirect to="workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>Slack in ReactTS</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
