import React , {useState}from 'react';
import { Drawer ,Box , Typography ,Switch } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Timer from './Timer';
import { alignProperty } from '@mui/material/styles/cssUtils';



export default function (props) {

  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  const [pomodoroInput, setPomodoroInput] = useState(30);
  const [shortBreakInput, setShortBreakInput] = useState(2);
  const [longBreakInput, setLongBreakInput] = useState(10);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const handleApply = () => {
    props.updatePomodoroTime(pomodoroInput * 60);
    props.updateShortBreakTime(shortBreakInput * 60);
    props.updateLongBreakTime(longBreakInput * 60);

    setIsDrawerOpen(false);
  };
  
  const handleSoundToggle = () => {
    const newIsSoundOn = !props.isSoundOn;
    localStorage.setItem('isSoundOn', JSON.stringify(newIsSoundOn));
    props.setIsSoundOn(newIsSoundOn);
  };

  return (
    
    <>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <strong style={{paddingLeft:'500px',color:'white' , fontSize : '20px'}}>{props.title}</strong>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <a className="nav-link active" style={{color:'white' , paddingLeft:'327px' ,fontSize:'20px'}} onClick={() => setIsDrawerOpen(true)} href="#"><strong>Settings</strong></a>
                  </li>
              </ul>
              </div>
          </div>
      </nav>

      <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='400px' textAlign='left' role='presentation'>
          <Typography variant='h6' component='div'>
            <div>
              <strong>Settings</strong>
            </div>
            <hr></hr>
            <div style={{paddingTop : '10px'}}>
              <strong>Time(Minutes)</strong>
            </div>
            <div style={{paddingTop : '20px'}}>
              <label>Pomodoro</label>
              <label style={{marginLeft:'30px'}}>Short Break</label>
              <label style={{marginLeft:'30px'}}>Long Break</label>
            </div>
            <div style={{paddingTop : '10px'}}>
            <input className='pomodoro' style={{width:'100px' , borderRadius : '5px' , textAlign : 'center'}} min="0" value={pomodoroInput}
          onChange={(e) => setPomodoroInput(parseInt(e.target.value, 10) || 0)}></input>
            <input style={{width:'100px',marginLeft:'30px' , borderRadius : '5px' , textAlign : 'center'}}  min="0" value={shortBreakInput}
          onChange={(e) => setShortBreakInput(parseInt(e.target.value, 10) || 0)}></input>
            <input style={{width:'100px' ,marginLeft:'30px' , borderRadius : '5px' , textAlign : 'center'}}  min="0" value={longBreakInput}
          onChange={(e) => setLongBreakInput(parseInt(e.target.value, 10) || 0)}></input>
            </div>
            <div style={{paddingTop : '20px'}}>
            <strong style={{marginRight:'241px'}}>Sound</strong>
            <Switch defaultChecked = {props.isSoundOn} onChange={handleSoundToggle} />
            </div>            

            <div style={{paddingTop : '400px' , paddingLeft:'145px'}}>
            <Button variant="outlined" className='change' onClick={handleApply} >Apply</Button>
            </div>
          </Typography>
        </Box>
      </Drawer>
    
    </>
  )
}
