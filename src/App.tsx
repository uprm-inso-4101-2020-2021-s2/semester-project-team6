import './App.scss';

import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import Home from 'containers/Home';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

//-----[Lazy load imports]-----
const Settings = lazy(() => import("containers/Settings"));
const Enrollment = lazy(() => import("containers/Enrollment"));
const Payment = lazy(() => import("containers/Payment"));

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={Loader}>
            <Route path="/settings" exact component={Settings} />
            <Route path="/enrollment" exact component={Enrollment} />
            <Route path="/payment" exact component={Payment} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default App;
