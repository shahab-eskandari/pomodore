import React from 'react';
import ShowCounter from './showCounter';
import ButtonsPanel from './buttonsPanel';
import { useCountdown } from '../hooks/useCountdown';


const CountdownTimer = ({ pomodoroData }) => {
  
  const [countDown, 
    type, 
    status, 
    handlePause, 
    handleContinue, 
    handleStop, 
    handleStartFocus, 
    handleStartBreak, 
    handleSkipBreak] = useCountdown(pomodoroData);
  
    return (
        <div>
            <div>
                <ShowCounter countDown={countDown}/>
            </div>
            <div>
                <ButtonsPanel data={[type,status,handlePause, handleContinue, handleStop, handleStartFocus, handleStartBreak, handleSkipBreak]}/>
            </div>
        </div>
    );
}

export default CountdownTimer;