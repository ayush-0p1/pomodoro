import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import { useState } from 'react';



function App() {
  
  const [pomodoroTime, setPomodoroTime] = useState(1800); 
  const [shortBreakTime, setShortBreakTime] = useState(120); 
  const [longBreakTime, setLongBreakTime] = useState(600);
  const [isSoundOn, setIsSoundOn] = useState(() => {
    const storedIsSoundOn = localStorage.getItem('isSoundOn');
    return storedIsSoundOn ? JSON.parse(storedIsSoundOn) : true;
  });
  const updatePomodoroTime = (newTime) => {
    setPomodoroTime(newTime);
  };

  const updateShortBreakTime = (newTime) => {
    setShortBreakTime(newTime);
  };

  const updateLongBreakTime = (newTime) => {
    setLongBreakTime(newTime);
  };
  

  return (
      <div className="App">
      <Navbar updatePomodoroTime={updatePomodoroTime} updateShortBreakTime={updateShortBreakTime}
        updateLongBreakTime={updateLongBreakTime} isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn} title = "FocusFlow"/>
      <div className='container' style={{paddingTop :'80px' ,height: '470px',width : '550px' ,border:'2px solid #FFFFFF' ,borderRadius :'10px'}}>
        <Timer pomodoroTime={pomodoroTime} shortBreakTime={shortBreakTime} longBreakTime={longBreakTime} isSoundOn={isSoundOn}/>
      </div>
      </div>
  
  );
}

export default App;
