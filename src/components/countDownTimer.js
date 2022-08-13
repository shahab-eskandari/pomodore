import React from 'react';
import TimeDisplay from './timeDisplay';
import { useCountdown } from '../hooks/useCountdown';


const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
        <TimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <TimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ durationInMinute }) => {
  const [minutes, seconds] = useCountdown(durationInMinute);
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }

export default CountdownTimer;