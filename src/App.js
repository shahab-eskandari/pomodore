import './App.css';
import CountdownTimer from './components/countDownTimer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro</h1>
        <CountdownTimer pomodoroData={[25, 5, 'Focus', 'Start']} />
      </header>
    </div>
  );
}

export default App;
