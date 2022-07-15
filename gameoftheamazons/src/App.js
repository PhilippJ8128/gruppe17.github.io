import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Startscreen from "./Startscreen.js";
import Game from "./Game.js";
import Help from "./Help.js";



function App() {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     items: [],
  //     isLoaded:false,
  //   }
  // }
  // componentDidMount(){

  //   fetch('https://gitlab.hs-anhalt.de/barth_to/game-of-the-amazons.git')
  // }
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Startscreen />} />
        <Route exact path="/Game" element={<Game />} />
        <Route exact path="/Help" element={<Help />} />
      </Routes>
    </Router>
  )
}

export default App;
