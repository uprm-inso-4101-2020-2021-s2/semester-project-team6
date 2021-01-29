//-----[enum]-----

export enum route {
  home = "Home",
  settings = "Settings",
  payments = "Payments",
}

//-----[interface]-----

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface Route {
  route: string;
  name: route;
}
