import './Toggle.scss';

import React from 'react';

interface Props {
  checked: boolean;
  onChange: (val: boolean) => void;
  style?: React.CSSProperties;
}

const Toggle: React.FC<Props> = ({ checked, onChange, style }) => {
  return (
    <label className="switch" style={style}>
      <input
        type="checkbox"
        onChange={({ target }) => onChange(target.checked)}
        checked={checked}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Toggle;
