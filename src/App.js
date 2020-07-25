import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import Navigation from "./Navigation/Nav";
import styled from 'styled-components';


const ColorApp = styled.div`
  color: Red;
  font-weight: bold;
  font-size: 50px;
`;




function App() {
  return (
    <div className="App">
      <ColorApp>
      <p>
        NASA PROJECT 
      </p>
      </ColorApp> 
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