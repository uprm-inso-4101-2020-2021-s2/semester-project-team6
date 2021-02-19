import './Enrollment.scss';

import WeekView from 'components/WeekView';
import React from 'react';

interface Props {}

const Enrollment: React.FC<Props> = () => {
  return (
    <div className="enrollment">
      <WeekView
        events={[]}
        startDate={new Date(2021, 1, 13)}
        endDate={new Date(2021, 1, 21)}
      />
    </div>
  );
};

export default Enrollment;
