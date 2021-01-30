import './ThemeToggle.scss';

import { themeAtom } from 'atoms';
import Toggle from 'components/Toggle';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  width?: string;
  height?: string;
}

const ThemeToggle: React.FC<Props> = ({ width, height }) => {
  const [checked, setChecked] = useRecoilState<boolean>(themeAtom);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const theme = checked ? "dark" : "light";
      localStorage.setItem("theme", theme);
      document.documentElement.classList.add("transition");

      const timer = setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 500);

      document.documentElement.setAttribute("data-theme", theme);

      return () => {
        document.documentElement.classList.remove("transition");
        clearTimeout(timer);
      };
    }
  }, [checked]);

  return (
    <div className="theme-picker">
      <Toggle checked={checked} onChange={setChecked} />
      <span>Night Mode</span>
    </div>
  );
};

export default ThemeToggle;
