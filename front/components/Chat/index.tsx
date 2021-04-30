import React, { VFC } from 'react';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import { ChatWrapper } from '@components/Chat/styles';

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
          <span>{data.createdAt}</span>
          <p>{data.content}</p>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
