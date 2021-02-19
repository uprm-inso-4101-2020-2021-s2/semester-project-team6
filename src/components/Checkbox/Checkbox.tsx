import './Checkbox.scss';

import React from 'react';

interface Props {
  checked: boolean;
  onChange: (val: boolean) => void;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<Props> = ({ checked, onChange, style }) => {
  return (
    <label className="checkbox" style={style}>
      <input
        type="checkbox"
        onChange={({ target }) => onChange(target.checked)}
        checked={checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
