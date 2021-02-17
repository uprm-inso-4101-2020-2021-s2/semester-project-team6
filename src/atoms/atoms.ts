import { atom } from 'recoil';
import { Authentication, route } from 'types';

/* Recoil 
This is the state management system.

Each atom will be a piece of state that can be called anywhere in the app.
To get more information on the recoil api visit "https://recoiljs.org/"

*/

//-----[Theme Atom]-----

export const themeAtom = atom({
  key: "themeAtom",
  default: localStorage.getItem("theme") === "light" ? false : true,
});

//-----[Current Route Atom]-----

export const selectedRouteAtom = atom<route>({
  key: "selectedRouteAtom",
  default: route.home,
});

export const authenticationAtom = atom<Authentication>({
  key: "authenticationAtom",
  default: {
    isAuthenticated: false,
    email: "",
    password: "",
    token: null,
  },
});
