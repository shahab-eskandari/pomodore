
const ButtonsPanel = ({data})=>{

    const [
        pomodoroType, 
        pomodoroStatus, 
        handlePause, 
        handleContinue, 
        handleStop, 
        handleStartFocus, 
        handleStartBreak, 
        handleSkipBreak] = data ; 

    let 
    startToFocusBtn, 
    pauseBtn, 
    stopBtn, 
    continueBtn, 
    startBreakTimeBtn, 
    skipBreakTimeBtn = false;

    if((pomodoroType==="Break" && pomodoroStatus==="Finished") ||
    (pomodoroType==="Focus" && pomodoroStatus==="Start" )){
        startToFocusBtn = true; 
    }
    if(pomodoroType==="Focus" && pomodoroStatus==="Running"){
        pauseBtn = true; 
    }
    if(pomodoroType==="Focus" && pomodoroStatus==="Paused"){
        stopBtn = true;
        continueBtn = true; 
    }
    if(pomodoroType==="Focus" && pomodoroStatus==="Finished"){
        startBreakTimeBtn = true;
    }
    if(pomodoroType==="Break" && pomodoroStatus==="Running"){
        skipBreakTimeBtn = true; 
    }

    return(
        <div className="buttons-panel__container">
            {startToFocusBtn && 
            <button 
                className="buttons-panel__button" 
                onClick={()=>handleStartFocus()}>Start to Focus
            </button>}
            {pauseBtn && 
            <button
                className="buttons-panel__button"
                onClick={()=>handlePause()}>Pause
            </button>}
            {stopBtn && 
            <button
                className="buttons-panel__button"
                onClick={()=>handleStop()}>Stop
            </button>}
            {continueBtn && 
            <button
                className="buttons-panel__button"
                onClick={()=>handleContinue()}>Continue
            </button>}
            {startBreakTimeBtn && 
            <button
                className="buttons-panel__button"
                onClick={()=>handleStartBreak()}>Start Break Time
            </button>}
            {skipBreakTimeBtn && 
            <button 
            className="buttons-panel__button"
            onClick={()=>{handleSkipBreak()}}>Skip Break Time
            </button>}
        </div>
    )
}

export default ButtonsPanel; 