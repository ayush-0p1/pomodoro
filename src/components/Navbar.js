import React from 'react'


export default function (props) {
  return (
    <>
    
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a style={{paddingLeft:'655px',color:'white'}}className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" style={{color:'white'}}aria-current="page" href="#">Settings</a>
                    </li>
                    {/*<li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>*/}
                    
                </ul>
                </div>
            </div>
        </nav>
    
    </>
  )
}
