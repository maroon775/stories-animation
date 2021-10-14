import React from 'react';
import './App.css';
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

    </div>
  );
}

export default App;

/*

animate header & profile when swiped to up
 - change avatar size
 - change status & hide

stories
 - tap to open story
 - bubble or fade open story as fullscreen from pointer positions
 - when short swipe story to down - return to top position as bubble animation
 - when long swipe story to down -

grid
 - show new un viewed profiles ??

* */
