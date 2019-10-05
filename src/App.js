import React from 'react';
import './App.css';
import styled from "styled-components"

import Hours from "./components/Hours"
import Minutes from "./components/Minutes"

function App() {
  return (
    <div className="App">
      <ClockFace>
        <CenterDot />
        <Hours />
        <Minutes />
      </ClockFace>
    </div>
  );
}

export default App;

const ClockFace = styled.div`
  width: 300px; 
  height: 300px;
  background: pink;
  margin: 0 auto;
  border-radius: 50%;
  margin-top: 200px;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 47%;
  left: 49.5%;
  width: 15px;
  height: 15px;
  background: black;
  border-radius: 50%;
`;