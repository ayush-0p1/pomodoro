import React, { useState, useEffect } from 'react';
import clock from './clock.mp3';
import alarm from './alarm.wav';


const Timer = ({ pomodoroTime, shortBreakTime, longBreakTime ,isSoundOn }) => {
  
  const [seconds, setSeconds] = useState(1800);
  const [isActive, setIsActive] = useState(false); 
  const [alaram , setAlaram] = useState('');

  const playClockSound = () => {
    if(isSoundOn){
      const audio = new Audio(clock);
      audio.play();
    }
  };

  const playAlarmSound = () => {
    const al = new Audio(alarm);
    al.play();
  };
  
  useEffect(() => {
    let intervalId ;
    
    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          return prevSeconds - 1;
        } , playClockSound());
      }, 1000);
      return () => clearInterval(intervalId);
    }

    if(isActive && seconds == 0){
      playAlarmSound();
      short();
    }
  }, [isActive , seconds ,isSoundOn]); 
  

  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);
  
  const handleReset = () => {
    setSeconds(pomodoroTime);
    setIsActive(false);
  };

  const short = () => {
    setSeconds(shortBreakTime) ;
    setIsActive(false) ;
  }

  const long = () => {
    setSeconds(longBreakTime) ;
    setIsActive(false) ;
  }

  const responsiveStyles = {
    btn: {
      color: 'white',
      fontSize: '20px',
      '@media screen and (max-width: 768px)': {
        fontSize: '16px',
      },
    },
    h1: {
      paddingTop: '60px',
      color: 'white',
      fontSize: '90px',
      '@media screen and (max-width: 768px)': {
        fontSize: '60px',
      },
    },
  };

  return (
    <div>
      <button type="button" onClick={handleReset} className="btn mx-1" style={responsiveStyles.btn}><strong>Pomodoro</strong></button>
      <button type="button" onClick={short} className="btn mx-1" style={responsiveStyles.btn}><strong>Short Break</strong></button>
      <button type="button" onClick={long} className="btn mx-1" style={responsiveStyles.btn}><strong>Long Break</strong></button>
      <h1 style={responsiveStyles.h1}><strong>{formattedTime}</strong></h1>
      <div style={{paddingTop : '60px'}}>
      <button type="button" onClick={() => setIsActive(!isActive)} className="btn" style={responsiveStyles.btn}><strong>{isActive ? 'Pause' : 'Start'} Timer</strong></button>
      </div>
      
    </div>
  );
};

export default Timer;
