import React, { FC, useCallback, useRef } from 'react';
import gravatar from 'gravatar';
import useSWR from 'swr';
import { useParams } from 'react-router';
import fetcher from '@utils/fetcher';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import { Container, Header } from '@pages/DirectMessage/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { IDM } from '@typings/db';
import makeSection from '@utils/makesection';
import { Scrollbars } from 'react-custom-scrollbars';

const DirectMessage: FC = () => {
  const [chat, onChangeChat, setChat] = useInput('');

  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData, error, revalidate, mutate } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR(`/api/users`, fetcher);
  const { data: chatData, mutate: mutateChat, revalidate: revalidateChat } = useSWR<IDM[]>(
    `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`,
    fetcher,
  );

  const scrollbarRef = useRef<Scrollbars>(null);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log('press enter to send!');
      setChat('');
      if (chat?.trim()) {
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            revalidateChat();
            setChat('');
          })
          .catch(console.error);
      }
    },
    [chat],
  );

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? [...chatData]?.reverse() : []);

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        {userData.nickname}
      </Header>
      <ChatList chatSections={chatSections} ref={scrollbarRef} />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default DirectMessage;
