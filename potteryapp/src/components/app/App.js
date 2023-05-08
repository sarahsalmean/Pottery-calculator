import "./App.css";
import React from "react";
import logo from "./logo-cream.png";
import Input from "../input/index";
import Display from "../display/index";
import { useState } from "react";
import updatedlogo from "./updatedlogo.png"

function App() {
  const [pottery, setPottery] = useState(null);
  const [clay, setClay] = useState(null);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [cone, setCone] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [depth, setDepth] = useState(50);
  let shrinkage = null

  function choosePottery(event) {
    setPottery(event.target.alt);
    console.log("I have chosen a", pottery);
  }

  function chooseClay(event) {
    console.log(event.target.value)
    setClay(event.target.value)
    console.log(clay)
  shrinkCalc()}

function shrinkCalc(clay, shrinkage) {
    if (clay === "raku") {
      shrinkage = 89
      setCone("06 - 04")
    } else if (clay === "stoneware") {
      shrinkage = 89
      setCone("05 - 10")
    } else if (clay === "earthenware") {
     shrinkage = 91
      setCone("04 - 02")
    } else if (clay === "paper") {
      shrinkage = 93
      setCone("06 - 04")
    } else if (clay === "powder") {
      shrinkage = 91
      setCone("06 - 04")
    } else if (clay === "porcelain") {
      shrinkage = 90
      setCone("09 - 10")
    }
    else console.log("no clay chosen")
  }

  function chooseWidth(event) {
    setWidth(event.target.value);
  }

  function chooseHeight(event) {
    setHeight(event.target.value);
  }


  function chooseDepth(event) {
    setDepth(event.target.value);
  }

  function buttonClick(clay) {
    console.log(height);
    console.log(width);
    console.log(depth);
    console.log(shrinkage);
    let heightCalc = (height / shrinkage) * 100;
    let widthCalc = (width / shrinkage) * 100;
    let depthCalc = (depth / shrinkage) * 100;
    setHeight(heightCalc.toFixed(2));
    setWidth(widthCalc.toFixed(2));
    setDepth(depthCalc.toFixed(2));
    setClicked(true);
  }

  function reset() 
  {setClicked(false)
  setPottery(null)
setClay(null)
 setWidth(50)
 setHeight(50)
setCone(null)
shrinkage = null
setDepth(50)
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img src={updatedlogo} className="logo" alt="claycalculator logo" />
      </div>
      {!clicked && (
        <Input
          potOnClick={choosePottery}
          pottery={pottery}
          clays={chooseClay}
          clay={clay}
          width={width}
          depth={depth}
          widthOnClick={chooseWidth}
          height={height}
          heightOnClick={chooseHeight}
          cone={cone}
          buttonClick={buttonClick}
          depthOnClick={chooseDepth}
        ></Input>
      )}
      {clicked && (<div className="display-container">
        <Display buttonClicker={reset}
          height={height}
          width={width}
          shrinkage={shrinkage}
          cone={cone}
          depth={depth}
          clay={clay}
          pottery={pottery}
        ></Display></div>
      )}
    </div>
  );
}

export default App;
