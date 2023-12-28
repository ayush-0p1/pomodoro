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
      <button type="button" onClick={handleReset} className="btn btn-primary mx-1" style={{backgroundColor :'#ba4949' , borderColor :'#ba4949' ,fontSize :'20px'}}><strong>Pomodoro</strong></button>
      <button type="button" onClick={short} className="btn btn-primary mx-1" style={{backgroundColor :'#ba4949' , borderColor :'#ba4949' ,fontSize :'20px'}}><strong>Short Break</strong></button>
      <button type="button" onClick={long} className="btn btn-primary mx-1" style={{backgroundColor :'#ba4949' , borderColor :'#ba4949' ,fontSize :'20px'}}><strong>Long Break</strong></button>
      <h1 style={{paddingTop : '60px',color : 'white' , fontSize : '90px'}}><strong>{formattedTime}</strong></h1>
      <div style={{paddingTop : '60px'}}>
      <button type="button" onClick={() => setIsActive(!isActive)} className="btn btn-primary" style={{backgroundColor :'#ba4949' , borderColor :'#ba4949' ,fontSize :'20px'}}><strong>{isActive ? 'Pause' : 'Start'} Timer</strong></button>
      </div>
      
    </div>
  );
};

export default Timer;
