import React, { useState, useEffect } from 'react';


const Timer = () => {
  const [seconds, setSeconds] = useState(1800);
  const [isActive, setIsActive] = useState(false); 
  const shortbreak = 120 ;
  const longbreak = 600 ;

  useEffect(() => {
    let intervalId ;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isActive , seconds]); 

  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);
  
  const handleReset = () => {
    setSeconds(1800);
    setIsActive(false);
  };

  const short = () => {
    setSeconds(shortbreak) ;
    setIsActive(false) ;
  }

  const long = () => {
    setSeconds(longbreak) ;
    setIsActive(false) ;
  }

  return (
    <div>
      <button type="button" onClick={handleReset} className="btn btn-primary mx-1" >Pomodoro</button>
      <button type="button" onClick={short} className="btn btn-primary mx-1" >Short Break</button>
      <button type="button" onClick={long} className="btn btn-primary mx-1" >Long Break</button>
      <h1 style={{paddingTop : '60px',color : 'white'}}><strong>{formattedTime}</strong></h1>
      <div style={{paddingTop : '60px'}}>
      <button type="button" onClick={() => setIsActive(!isActive)} className="btn btn-primary" >{isActive ? 'Pause' : 'Start'} Timer</button>
      </div>
      
    </div>
  );
};

export default Timer;
