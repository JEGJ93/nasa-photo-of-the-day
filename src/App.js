import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import Navigation from "./Navigation/Nav";

function App() {
  return (
    <div className="App">
      <p>
        NASA PROJECT 
      </p>
          <Navigation/>
          <MainPage/>   
    </div>
  );
}

export default App;


      // <p>
      //   Read through the instructions in the README.md file to build your NASA
      //   app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      // </p>