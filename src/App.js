import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components"

import Hours from "./components/Hours"
import Minutes from "./components/Minutes"
import Seconds from "./components/Seconds"

function App() {
  const time = new Date();
  
  const [seconds, setSeconds] = useState(time.getSeconds())

  useEffect(() => {
    let date = new Date;
    const secondInt = setInterval(() => {
      setSeconds(date.getSeconds())
      console.log(seconds)
    }, 1000)
  }, [seconds])

  return (
    <div className="App">
      <ClockFace>
        <CenterDot />
        <Hours />
        <Minutes />
        <Seconds />
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