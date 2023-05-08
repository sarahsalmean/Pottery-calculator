import React from "react";
import bowl from "./bowl.png"
import plate from "./plate.png"
import mug from "./mug.png"
import vase from "./vase.png"
import "./input.css"

export default function Input(props) {
  return (
    <div>
      <div>
        <h3 className="question">What are you making?</h3>
        <div className="objects">
        <img className="crockery" src={plate} alt="plate" value="plate" onClick={props.potOnClick}/>
        <img className="crockery" src={bowl} alt="bowl" value="bowl" onClick={props.potOnClick}/>
        <img className="crockery" src={mug} alt="mug" value="mug" onClick={props.potOnClick}/>
        <img className="crockery" src={vase} alt="vase" value="vase" onClick={props.potOnClick}/>
        </div>
        {props.pottery && <p class="choice">I am making a {props.pottery}</p>}
      </div>

      <div>
        {" "}
        <h3 className="question">Which clay are you using?</h3>
        <select id="clays" onChange={props.clays}>
        <option value="choose">Choose clay...</option>
        <option value="raku">Raku</option>
        <option value="paper">Paper</option>
        <option value="powder">Powder</option>
        <option value="earthenware">Earthenware</option>
        <option value="porcelain">Porcelain</option>
        <option value="stoneware">Stoneware</option>
      </select>
      </div>
      {props.clay && <p class="choice">I using {props.clay} clay.</p>}
      <div>
        {" "}
        <h3 className="question">What height would you like it to be? (cm)</h3>{" "}
        <div class="slidecontainer">
  <input type="range" min="1" max="50" class="slider" id="myRange" onChange={props.heightOnClick}/>
</div>
      {props.height && <p class="choice">{props.height} cm tall.</p>}
      </div>

      <div>
        {" "}
        <h3 className="question">How wide would you like it to be? (cm)</h3>{" "}
        <div class="slidecontainer">
  <input type="range" min="1" max="50" class="slider" id="myRange" onChange={props.widthOnClick}/>
</div>
      {props.width && <p class="choice">{props.width} cm wide.</p>}
      </div>
      <div>
        {" "}
        <h3 className="question">How deep would you like it to be? (cm)</h3>{" "}
        <div class="slidecontainer">
  <input type="range" min="1" max="50" class="slider" id="myRange" onChange={props.depthOnClick}/>
</div>
      {props.depth && <p class="choice">{props.depth} cm deep.</p>}
      </div>
      <button className="button" onClick={props.buttonClick}>Calculate</button>
    </div>
  );
}

/*       <div>
        {" "}
        <h3 className="question">What cone will you be firing it at?</h3>
        <div class="slidecontainer">
  <input type="range" min="1" max="10" class="slider" id="myRange" onChange={props.coneOnClick}/>
</div>
      {props.cone && <p class="choice">{props.cone} cone.</p>}
      </div> */
