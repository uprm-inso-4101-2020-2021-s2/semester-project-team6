import './App.scss';

import { authenticationAtom } from 'atoms';
import Loader from 'components/Loader';
import Login from 'components/Login/Login';
import Navbar from 'components/Navbar';
import ProtectedRoute from 'components/ProtectedRoute';
import Sidebar from 'components/Sidebar/Sidebar';
import Home from 'containers/Home';
import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const App: React.FC = () => {
  const { isAuthenticated } = useRecoilValue(authenticationAtom);
  return !isAuthenticated ? (
    <Login />
  ) : (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/settings" exact component={Settings} />
            <ProtectedRoute path="/enrollment" exact component={Enrollment} />
            <ProtectedRoute path="/payment" exact component={Payment} />
            <ProtectedRoute path="/account" exact component={Account} />
            <ProtectedRoute path="*" component={Page404} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;

//-----[Lazy load imports]-----
const Settings = lazy(() => import("containers/Settings"));
const Enrollment = lazy(() => import("containers/Enrollment"));
const Payment = lazy(() => import("containers/Payment"));
const Page404 = lazy(() => import("components/Page404"));
const Account = lazy(() => import("containers/Account"));
