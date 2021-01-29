import './Sidebar.scss';

import { selectedRoute } from 'atoms';
import RouteIcon, { routes } from 'components/Routes';
import ThemeToggle from 'components/ThemeToggle';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { route } from 'types';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const [selected, setSelected] = useRecoilState<route>(selectedRoute);

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
            <div>
              <RouteIcon name={name} />
            </div>
            <Link to={route}>{name}</Link>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
};

export default Sidebar;
