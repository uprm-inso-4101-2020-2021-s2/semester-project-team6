import { ReactComponent as Enrollment } from 'assets/svg/enrollment.svg';
import { ReactComponent as Home } from 'assets/svg/home.svg';
import { ReactComponent as Payments } from 'assets/svg/price.svg';
import { ReactComponent as Settings } from 'assets/svg/settings.svg';
import React from 'react';
import { route, Route } from 'types/types';

export const routes: Route[] = [
  { route: "/", name: route.home },
  { route: "/enrollment", name: route.enrollment },
  { route: "/payment", name: route.payment },
  { route: "/settings", name: route.settings },
];

interface Props {
  name: route;
}

const RouteIcon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case route.home:
      return <Home />;

    case route.settings:
      return <Settings />;

    case route.payment:
      return <Payments />;

    case route.enrollment:
      return <Enrollment />;

    default:
      return null;
  }
};

export default RouteIcon;
