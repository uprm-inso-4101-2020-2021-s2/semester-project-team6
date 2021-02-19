import { client } from 'apollo/apollo';
import { IS_SIGNED_IN } from 'apollo/queries';
import { atom, selector } from 'recoil';
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

//-----[Current Route Atom]-----

export const selectedRouteAtom = atom<route>({
  key: "selectedRouteAtom",
  default: route.home,
});

const isAuthenticated = selector<boolean>({
  key: "isAuthenticated",
  get: async () =>
    await client
      .query({
        query: IS_SIGNED_IN,
        fetchPolicy: "no-cache",
      })
      .then(({ data }) => data.isSignedIn),
});

export const authenticationAtom = atom<boolean>({
  key: "authenticationAtom",
  default: isAuthenticated,
});
