
import './App.css';
import React from "react"
import logo from "./logo-cream.png"
import Input from "../input/index"
import Display from "../display/index"
import {useState} from "react"

function App() {

  const [pottery, setPottery] = useState(null)
  const [clay, setClay] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [cone, setCone] = useState(null)
  const [clicked, setClicked] = useState(null)
  const [shrinkage, setShrinkage] = useState(null)
  const [depth, setDepth] = useState(null)

function choosePottery(event) {
  setPottery(event.target.alt)
  console.log("I have chosen a" , pottery)
}

function chooseClay(event) {
  setClay(event.target.value)
}

function chooseWidth(event)
{setWidth(event.target.value)}


function chooseHeight(event)
{setHeight(event.target.value)}


function chooseCone(event)
{setCone(event.target.value)}

function chooseDepth(event)
{setDepth(event.target.value)}

function buttonClick(event){
if (clay === "raku"){setShrinkage(0.89); setCone("06 - 04")}
else if (clay === "stoneware"){setShrinkage(0.89); setCone("05 - 10")}
else if (clay === "earthenware"){setShrinkage(0.91); setCone("04 - 02")}
else if (clay === "paper"){setShrinkage(0.93); setCone("06 - 04")}
else if (clay === "powder"){setShrinkage(0.91); setCone("06 - 04")}
else if  (clay === "porcelain"){setShrinkage(0.905); setCone("09 - 10")}
let heightCalc = height / shrinkage
let widthCalc = width / shrinkage
let depthCalc = depth / shrinkage
setHeight(heightCalc)
setWidth(widthCalc)
setDepth(depthCalc)
setClicked(true)
}

  return (
    <div className="App">
   <div className="logo-container"><img src={logo} class= "logo" alt="claycalculator logo"/></div>
   {!clicked &&<Input potOnClick={choosePottery} pottery={pottery} clays={chooseClay} clay={clay} width={width} depth={depth} widthOnClick={chooseWidth} height={height} heightOnClick={chooseHeight} cone={cone} coneOnClick={chooseCone} buttonClick={buttonClick} depthOnClick={chooseDepth}>
   </Input>}
   {clicked && <Display height={height} width={width} shrinkage={shrinkage} cone={cone} depth={depth} clay={clay}></Display>}
    </div>
  );
}

export default App;
