import './Logout.scss';

import { ReactComponent as Leave } from 'assets/svg/logout.svg';
import { authenticationAtom } from 'atoms';
import React from 'react';
import { useRecoilState } from 'recoil';

interface Props {}

const Logout: React.FC<Props> = () => {
  const [auth, setAuth] = useRecoilState(authenticationAtom);
  return (
    <button
      className="logout"
      onClick={() => setAuth({ ...auth, isAuthenticated: false })}
    >
      <Leave />
    </button>
  );
};

export default Logout;
