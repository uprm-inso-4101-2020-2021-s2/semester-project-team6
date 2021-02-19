import './WeekView.scss';

import { areDifferentDates, getWeekExtremes, listOfDays } from 'functions/dateFunctions';
import React from 'react';
import { Event } from 'types';

interface Props {
  startDate?: Date;
  endDate?: Date;
  events: Event[];
}

const WeekView: React.FC<Props> = ({ startDate, endDate }) => {
  const weeks = getWeekExtremes();
  const dates = listOfDays(weeks);

  return (
    <div className="week-view">
      {startDate && areDifferentDates(startDate, weeks.start) ? (
        <span>
          <p>
            {startDate?.toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
        </span>
      ) : null}

      <ul>
        {dates.map((d, index) => {
          let active;
          if (d.getDate() === new Date().getDate())
            active = { backgroundColor: "var(--highlight)" };
          return (
            <li key={index} style={active}>
              <h3>{d.getDate()}</h3>
              <p>{d.toLocaleDateString("en-US", { weekday: "short" })}</p>
            </li>
          );
        })}
      </ul>

      {endDate && areDifferentDates(weeks.end, endDate) ? (
        <span>
          <p>
            {endDate?.toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
        </span>
      ) : null}
    </div>
  );
};

export default WeekView;
