import './Loader.scss';

import React from 'react';

interface Props {
  message?: string;
  style?: React.CSSProperties;
}

const Loader: React.FC<Props> = ({ message, style }) => {
  return (
    <div className="loader" style={style}>
      {message && <p>{message}</p>}
      Loading
    </div>
  );
};

export default Loader;
