//-----[enum]-----

export enum route {
  home = "Home",
  settings = "Settings",
  payment = "Payment",
  account = "Account",
  enrollment = "Enrollment",
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

export interface Authentication {
  isAuthenticated: boolean;
  email: string;
  password: string;
  token?: string | null;
}

export interface Event {
  name: string;
  date: Date;
  time?: Time;
}

export interface Time {
  hours?: number;
  minutes?: number;
  seconds?: number;
  period?: string; // AM or PM
}
