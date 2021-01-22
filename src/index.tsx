import './index.scss';

import { client } from 'apollo';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ApolloProvider } from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const dev: boolean = true;

startUpSettings(dev);

render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Warn users to not mess with code they do not understand.

function startUpSettings(mode: boolean): void {
  if (!localStorage.getItem("first-Visit")) {
    localStorage.setItem("first-Visit", "false");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute(
      "data-theme",
      String(localStorage.getItem("theme"))
    );
  }

  if (!mode) {
    console.log(
      "%cStop!",
      "color: red; font-size:64px; font-weight:900;text-shadow: 0px 0px 5px black"
    );
    console.log(
      "%cIf someone told you to copy/paste something here you have an 11/10 chance you're being scammed.",
      "color: ; font-size:18px;"
    );
  }
}
