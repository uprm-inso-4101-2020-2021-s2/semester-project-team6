import './App.scss';

import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import Home from 'containers/Home';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Settings = lazy(() => import("components/Settings"));
const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={<Loader />}>
            <Route path="/settings" exact component={Settings} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default App;
