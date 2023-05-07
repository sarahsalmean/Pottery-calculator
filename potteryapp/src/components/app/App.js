
import './App.css';
import React from "react"
import logo from "./logo-cream.png"
import Input from "../input/index"
import {useState} from "react"

function App() {

  const [pottery, setPottery] = useState(null)
  const [clay, setClay] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [cone, setCone] = useState(null)

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

  return (
    <div className="App">
   <div className="logo-container"><img src={logo} class= "logo" alt="claycalculator logo"/></div>
   <Input potOnClick={choosePottery} pottery={pottery} clays={chooseClay} clay={clay} width={width} widthOnClick={chooseWidth} height={height} heightOnClick={chooseHeight} cone={cone} coneOnClick={chooseCone}>
   </Input>
    </div>
  );
}

export default App;
