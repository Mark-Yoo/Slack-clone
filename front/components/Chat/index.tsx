import React, { VFC } from 'react';
import { IDM } from '@typings/db';

interface Props {
  key: string;
  data: IDM[];
}

const Chat: VFC<Props> = ({ key, data }) => {
  return <div>Chat</div>;
};

export default Chat;
