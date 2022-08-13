import { useEffect, useState } from 'react';

const useCountdown = ([pomodoroDurationMin=25 , restDurationMin=5]) => {
    
    const pomodoroDurationSec = pomodoroDurationMin * 60 ;
    const restDurationSec = restDurationMin * 60;

    const [countDown, setCountDown] = useState(pomodoroDurationSec);
    const [rest, setRest] = useState(true);

    useEffect(() => {
        //console.log([rest,countDown]);
        const interval = setInterval(() => {
          if(countDown!==0){
            setCountDown(countDown-1);
          }else{
            setRest(!rest);
            console.log(rest);
            if(rest){
              setCountDown(restDurationSec);
            }else{
              setCountDown(pomodoroDurationSec)
            }
          }
        
        }, 1000);
        return () => clearInterval(interval);
    },);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const minutes = Math.floor(countDown / 60 );
  const seconds = Math.floor( countDown % 60 );

  return [minutes, seconds];
};

export { useCountdown };