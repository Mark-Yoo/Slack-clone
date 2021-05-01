import React, { VFC } from 'react';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import { ChatWrapper } from '@components/Chat/styles';
import dayjs from 'dayjs';

interface Props {
  key: Number;
  data: IDM;
}

const Chat: VFC<Props> = ({ key, data }) => {
  const user = data.Sender;
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
          <p>{data.content}</p>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
