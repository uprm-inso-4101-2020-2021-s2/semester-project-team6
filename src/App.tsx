import './App.scss';

import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import React from 'react';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
};

export default App;
