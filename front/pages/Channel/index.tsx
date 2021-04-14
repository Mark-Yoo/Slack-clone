import React, { FC, useCallback } from 'react';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import useInput from '@hooks/useInput';
import { Header, Container } from '@pages/Channel/styles';

const Channel: FC = () => {
  const [chat, onChangeChat] = useInput('');

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Header>Channel</Header>
      <ChatList />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default Channel;
