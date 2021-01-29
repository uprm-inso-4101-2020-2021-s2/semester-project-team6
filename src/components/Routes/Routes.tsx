import { ReactComponent as Links } from 'assets/svg/link.svg';
import React from 'react';
import { route, Route } from 'types/types';

export const routes: Route[] = [
  { route: "/", name: route.home },
  { route: "/settings", name: route.settings },
];

interface Props {
  name: route;
}

const RouteIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case route.home:
      return <Links />;

    case route.settings:
      return <Links />;

    default:
      return null;
  }
};

export default RouteIcon;
