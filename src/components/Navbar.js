import React , {useState}from 'react';
import { Drawer ,Box , Typography ,Switch } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function (props) {

  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  return (
    
    <>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <a style={{paddingLeft:'500px',color:'white'}}className="navbar-brand" href="#"><strong>{props.title}</strong></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <a className="nav-link active" style={{color:'white' , paddingLeft:'327px'}} onClick={() => setIsDrawerOpen(true)} href="#"><strong>Settings</strong></a>
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
            <input style={{width:'100px' , borderRadius : '5px'}} type="number" min="0" step="1" value="30"></input>
            <input style={{width:'100px',marginLeft:'30px' , borderRadius : '5px'}} type="number" min="0" step="1" value="2"></input>
            <input style={{width:'100px' ,marginLeft:'30px' , borderRadius : '5px'}} type="number" min="0" step="1" value="10"></input>
            </div>
            <div style={{paddingTop : '20px'}}>
            <strong style={{marginRight:'145px'}}>Auto Start Break</strong>
            <Switch defaultChecked />
            </div>
            <hr></hr>
            <div style={{paddingTop : '10px'}}>
              <strong>Theme</strong>
            </div>
            <div style={{paddingTop : '10px'}}>
              <label>Color Themes</label>
            </div>
          </Typography>
        </Box>
      </Drawer>
    
    </>
  )
}
