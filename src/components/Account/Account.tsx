import './Account.scss';

import { ReactComponent as ArrowDown } from 'assets/svg/arrowDown.svg';
import { selectedRouteAtom } from 'atoms';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { route } from 'types';

interface Props {
  name?: String;
  avatar?: any;
}

const Account: React.FC<Props> = ({ avatar, name }) => {
  const setSelectedRoute = useSetRecoilState(selectedRouteAtom);

  return (
    <li className="account">
      <Link
        to="/account"
        className="account-button"
        onClick={() => setSelectedRoute(route.account)}
      >
        <img src={avatar} alt="Avatar" />
        <p>{name}</p>
        <ArrowDown />
      </Link>
    </li>
  );
};

export default Account;
