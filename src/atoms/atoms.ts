import { atom } from 'recoil';
import { route } from 'types';

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

export const selectedRoute = atom<route>({
  key: "selectedRoute",
  default: route.home,
});
