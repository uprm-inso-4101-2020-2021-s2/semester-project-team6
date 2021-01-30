import './MobileMenu.scss';

import { ReactComponent as Menu } from 'assets/svg/menu.svg';
import Dropdown from 'components/Dropdown';
import useVisible from 'functions/useVisible';
import React from 'react';

interface Props {
  name?: String;
  avatar?: any;
}

const MobileMenu: React.FC<Props> = ({ avatar, name }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <li className="navbar-mobile">
      <Menu onClick={() => setIsVisible(!isVisible)} />

      {isVisible && <Dropdown ref={ref} />}
    </li>
  );
};

export default MobileMenu;
