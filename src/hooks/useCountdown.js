import { useEffect, useState, useRef } from 'react';

const useCountdown = ([pomodoroDuration, breakDuration, pomodoroType, pomodoroStatus]) => {
  //pomodoroDuration is in Minutes 
  //pomodoroType === "Focus" | "Break"
  //pomodoroStatus === "Paused" | "Running" | "Finished" | "Start"

    const pomodoroDurationSec = pomodoroDuration* 60 ;
    const breakDurationSec = breakDuration * 60; 

    let interval=useRef(null);

    const [countDown, setCountDown] = useState(pomodoroDurationSec);
    const [type, setType] = useState(pomodoroType);
    const [status, setStatus] = useState(pomodoroStatus); 

    useEffect(() => {
        if(status ==='Running'){
          interval.current = setInterval(() => {
            if(countDown!==0){
              setCountDown(countDown-1);
            }else{
              if(type==="Focus"){
                setStatus("Finished");
                setCountDown(breakDurationSec)
              }else{
                setStatus("Finished");
                setCountDown(pomodoroDurationSec)
              }
            }
          }, 1000);
        }
        if(status==='Finished' || status==='Paused'){
          clearInterval(interval.current);
        }
      
      return () => clearInterval(interval.current);
    },);

    const handlePause = () => { 
      setStatus("Paused");
    }

    const handleContinue = ()=>{
      setStatus("Running");
    }

    const handleStop = ()=>{
      setStatus("Start");
      setCountDown(pomodoroDurationSec);
    }

    const handleStartFocus = ()=>{
      setType("Focus")
      setStatus("Running");
    }

    const handleStartBreak = ()=>{
      setStatus("Running"); 
      setType("Break");
      setCountDown(breakDurationSec);
    }

    const handleSkipBreak = ()=>{
      setType("Focus");
      setStatus("Start"); 
      setCountDown(pomodoroDurationSec);
    }
     
    return [
      countDown, 
      type, 
      status, 
      handlePause, 
      handleContinue, 
      handleStop, 
      handleStartFocus, 
      handleStartBreak,
      handleSkipBreak];    
};

export { useCountdown };

