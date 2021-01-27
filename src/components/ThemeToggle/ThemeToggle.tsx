import './ThemeToggle.scss';

import { themeAtom } from 'atoms';
import Toggle from 'components/Toggle';
import React from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  width?: string;
  height?: string;
}

const ThemeToggle: React.FC<Props> = ({ width, height }) => {
  const [checked, setChecked] = useRecoilState<boolean>(themeAtom);

  const theme = checked ? "dark" : "light";
  localStorage.setItem("theme", theme);
  trans();
  document.documentElement.setAttribute("data-theme", theme);

  return (
    <div className="theme-picker">
      <Toggle checked={checked} onChange={setChecked} />
      <span>Night Mode</span>
    </div>
  );
};

export default ThemeToggle;

function trans() {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 700);
}
