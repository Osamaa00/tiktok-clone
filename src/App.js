import React from 'react';
import './App.css';
import Video from './Video/Video';

function App() {
  return (
    <div className="app">
      <h1>Tiktok Clone</h1>

      <div className="app__videos">
        {/* video components here */}
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
