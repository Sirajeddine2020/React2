import React from 'react';
// import logo from './logo.svg';

import imageInSrc from "./imageInSrc.jpg";
import './App.css';
import './style.css';

function App() {
  return (
    <>
      <div style={{ border:'solid', borderSize:'1px', borderColor: 'black', maxWidth:'100vw'}} >
		<h1 className={"title red"}>Your name here</h1>
		<br></br>
		<img src={imageInSrc} alt ='imageInSrc' />
			
			
		<br></br>	
		<img src="/imageInPublic.jpg" alt="imageInPublic.jpg"/>
	  </div>
	  <div className='newLine'></div>	
	  <video width='320' height='240' controls>
	  <source src='/myVideo.mp4' type='video/mp4' alt ='myVideo'/>
      </video>
    </>
  );
}

export default App;
