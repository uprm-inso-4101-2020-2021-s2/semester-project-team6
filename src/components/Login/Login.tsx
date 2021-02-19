import './Login.scss';

import { LOGIN } from 'apollo/queries';
import { ReactComponent as Lock } from 'assets/svg/lock.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';
import { authenticationAtom } from 'atoms';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { useMutation } from '@apollo/client';

interface Props {}

const Login: React.FC<Props> = () => {
  const [auth, setAuth] = useRecoilState(authenticationAtom);
  const [login, { data, error }] = useMutation(LOGIN, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
    onError: (e) => null,
  });

  useEffect(() => {
    if (data) {
      setAuth({ ...auth, isAuthenticated: data });
    }
  }, [auth, data, setAuth]);

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ variables: { email: auth.email, password: auth.password } });
  }

  return (
    <div className="login">
      <form className="login-fields" onSubmit={onFormSubmit}>
        <h1>UPRM Enrollment</h1>
        {error && <h3>{error?.message}</h3>}
        <label>
          <span>Email</span>

          <input
            type="email"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, email: value })
            }
          />
          <User />
        </label>
        <label>
          <span>Password</span>

          <input
            type="password"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, password: value })
            }
          />
          <Lock />
        </label>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>

      <ThemeToggle />
    </div>
  );
};

export default Login;
