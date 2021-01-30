import './Navbar.scss';

import avatar from 'assets/image/spot.jpeg';
import Account from 'components/Account';
import MobileMenu from 'components/MobileMenu';
import React from 'react';

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="navbar">
      <ul>
        <span></span>
        <span></span>
        <Account avatar={avatar} name={"Santos"}></Account>
        <MobileMenu />
      </ul>
    </nav>
  );
};

export default Navbar;
