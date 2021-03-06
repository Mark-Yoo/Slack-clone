import React, { useCallback, FC } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import { Redirect } from 'react-router';

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

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>๋ก๊ทธ์์</button>
      {children}
    </div>
  );
};

export default Workspace;
