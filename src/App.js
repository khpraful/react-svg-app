import React from 'react';
import { ReactComponent as MyLogo } from './assets/logo.svg';

function App() {

  const handleMouseEnter = e => {
    alert("Welcome to Digitization Station!!!")
  }
  

  return (
    
    <div>
    <br></br>
    <br></br>
      <svg version="1.1" baseProfile="full"
        width="600" height="300" fill="white" 
        xlmns="http://www/w3/org/2000/svg">
        <MyLogo/>
        <polyline
          fillOpacity="0"
          points="50,50 150,30 100,150 150,200 250,200 350,200 450,200 500,40 550,70 550,150"
          stroke="yellow"
          strokeWidth={20}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="grey"
          stroke="black"
          onMouseEnter={handleMouseEnter}
        />
        <text x="45" y="55">
          0
        </text>
        <circle
          cx="150"
          cy="30"
          r="10"
          fill="orange"
          stroke="black"
        />
        <text x="145" y="35">
          1
        </text>
        <circle
          cx="150"
          cy="200"
          r="10"
          fill="blue"
          stroke="black"
        />
        <text x="145" y="205">
          A
        </text>
        <circle
          cx="250"
          cy="200"
          r="10"
          fill="blue"
          stroke="black"
        />
        <text x="245" y="205">
          B
        </text>
        <circle
          cx="350"
          cy="200"
          r="10"
          fill="blue"
          stroke="black"
        />
        <text x="345" y="205">
          C
        </text>
        <circle
          cx="450"
          cy="200"
          r="10"
          fill="blue"
          stroke="black"
        />
        <text x="445" y="205">
          D
        </text>
        <circle
          cx="500"
          cy="50"
          r="10"
          fill="orange"
          stroke="black"
        />
        <text x="495" y="55">
          2
        </text>
        <circle
          cx="550"
          cy="70"
          r="10"
          fill="green"
          stroke="black"
        />
        <text x="545" y="75">
          1
        </text>
        <circle
          cx="550"
          cy="150"
          r="10"
          fill="green"
          stroke="black"
          textAnchor="2"
        />
        <text x="545" y="155">
          2
        </text>
      </svg>
    </div>
  );
}

export default App;
