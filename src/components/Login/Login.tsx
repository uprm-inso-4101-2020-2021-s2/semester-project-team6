import './Login.scss';

import { authenticationAtom } from 'atoms';
import React from 'react';
import { useRecoilState } from 'recoil';

interface Props {}

const Login: React.FC<Props> = () => {
  const [auth, setAuth] = useRecoilState(authenticationAtom);
  return (
    <div className="login">
      <div className="login-fields">
        <h1>UPRM Enrollment</h1>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, email: value })
            }
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, password: value })
            }
          />
        </label>
        <button
          className="login-button"
          onClick={() => setAuth({ ...auth, isAuthenticated: true })}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
