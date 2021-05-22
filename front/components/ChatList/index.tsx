import React, { useCallback, forwardRef, VFC } from 'react';
import Chat from '@components/Chat';
import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IDM } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: IDM[] };
}

const ChatList = forwardRef<Scrollbars, Props>(({ chatSections }, ref) => {
  // scrollbarRef를 DirectMessage 혹은 Channel 쪽에 있는것이 스크롤의 기준을 잡는 것이 적당해보임
  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) {
      console.log('가장 위');
      // 데이터 추가 로딩
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={ref} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats?.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
});

export default ChatList;
