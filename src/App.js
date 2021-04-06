import React from 'react'
import './App.css';
import myImageInSrc from "./imageInSrc.jpg";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="DIV">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={myImageInSrc} alt='myImageInSrc'/>
        <br />
        <img src="/imageInPublic.png" alt="myImageInPublic" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
