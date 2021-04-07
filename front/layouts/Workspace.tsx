import React, { useCallback, FC } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);
  return <button onClick={onLogout}>로그아웃</button>;
};

export default Workspace;
