import './Logout.scss';

import { LOGOUT } from 'apollo/queries';
import { ReactComponent as Leave } from 'assets/svg/logout.svg';
import { authenticationAtom } from 'atoms';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { useMutation } from '@apollo/client';

interface Props {}

const Logout: React.FC<Props> = () => {
  const setAuth = useSetRecoilState(authenticationAtom);
  const [logout, { data }] = useMutation(LOGOUT);

  useEffect(() => {
    if (data) {
      setAuth(false);
    }
  }, [data, setAuth]);

  return (
    <button className="logout" onClick={() => logout()}>
      <Leave />
    </button>
  );
};

export default Logout;
