import './App.css';
import CountdownTimer from './components/countDownTimer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>A basic Count Down</h1>
        <CountdownTimer durationInMinute={[0.1,0.05]} />
      </header>
    </div>
  );
}

export default App;
