import './Sidebar.scss';

import { selectedRouteAtom } from 'atoms';
import Logout from 'components/Logout';
import RouteIcon, { routes } from 'components/Routes';
import ThemeToggle from 'components/ThemeToggle';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { route } from 'types';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const [selected, setSelected] = useRecoilState<route>(selectedRouteAtom);

  return (
    <nav className="sidebar">
      <p>MENU</p>
      <ul>
        {routes.map(({ name, route }, index) => (
          <li
            key={index}
            className={selected === name ? "active" : undefined}
            onClick={() => setSelected(name)}
          >
            <Link to={route}>
              <div>
                <RouteIcon name={name} />
              </div>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-options">
        <ThemeToggle />
        <Logout />
      </div>
    </nav>
  );
};

export default Sidebar;
