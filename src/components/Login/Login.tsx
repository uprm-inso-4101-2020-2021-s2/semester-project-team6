import './Login.scss';

import { LOGIN } from 'apollo/queries';
import { ReactComponent as Lock } from 'assets/svg/lock.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';
import { authenticationAtom } from 'atoms';
import ThemeToggle from 'components/ThemeToggle';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Authentication } from 'types';

import { useMutation } from '@apollo/client';

interface Props {}

const Login: React.FC<Props> = () => {
  const setIsAuth = useSetRecoilState(authenticationAtom);
  const [auth, setAuth] = useState<Authentication>({ email: "", password: "" });
  const [login, { data, error }] = useMutation(LOGIN, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
    onError: () => null,
  });

  useEffect(() => {
    setIsAuth(data ? true : false);
  }, [data, setIsAuth]);

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ variables: { email: auth.email, password: auth.password } });
  }

  return (
    <div className="login">
      <form className="login-fields" onSubmit={onFormSubmit} action="">
        <h1>UPRM Enrollment</h1>
        {error && <h3>{error?.message}</h3>}
        <label className="login-input">
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, email: value })
            }
          />
          <User />
        </label>
        <label className="login-input">
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={({ target: { value } }) =>
              setAuth({ ...auth, password: value })
            }
          />
          <Lock />
        </label>
        <div className="login-options">
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
      </form>

      <ThemeToggle />
    </div>
  );
};

export default Login;
