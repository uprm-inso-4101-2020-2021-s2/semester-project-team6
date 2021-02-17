import './Dropdown.scss';

import { ReactComponent as Back } from 'assets/svg/arrowLeft.svg';
import { ReactComponent as Navigation } from 'assets/svg/navigation.svg';
import { selectedRouteAtom } from 'atoms';
import Logout from 'components/Logout/Logout';
import RouteIcon, { routes } from 'components/Routes';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRecoilState } from 'recoil';
import { route } from 'types';

interface Props {
  leftIcon?: any;
  rightIcon?: any;
  goToMenu?: menu;
}

enum menu {
  main = "main",
  navigation = "navigation",
}

const Dropdown = forwardRef((props, ref: any) => {
  const [activeMenu, setActiveMenu] = useState<menu>(menu.main);
  const [menuHeight, setMenuHeight] = useState<any>(null);
  const dropdownRef = useRef<any>(null);
  const [selected, setSelected] = useRecoilState<route>(selectedRouteAtom);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem: React.FC<Props> = ({
    leftIcon,
    children,
    rightIcon,
    goToMenu,
  }) => {
    return (
      <span
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </span>
    );
  };

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight }}
      ref={(r) => {
        dropdownRef.current = r;
        ref.current = r;
      }}
    >
      <CSSTransition
        in={activeMenu === menu.main}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<Navigation />} goToMenu={menu.navigation}>
            Navigation
          </DropdownItem>
          <ThemeToggle />
          <Logout />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === menu.navigation}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu={menu.main} leftIcon={<Back />}></DropdownItem>
          {routes.map(({ name, route }, index) => (
            <span
              key={index}
              className={`menu-route${selected === name ? " active" : ""}`}
              onClick={() => setSelected(name)}
            >
              <Link to={route}>
                <div>
                  <RouteIcon name={name} />
                </div>
                {name}
              </Link>
            </span>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
});

export default Dropdown;
