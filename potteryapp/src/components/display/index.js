import React from "react";
import "./display.css"

export default function Display(props) {
  return (
    <div class="sizing">
      <h3>Your sizing...</h3>
      <p>
        Based on average shrinkage rates of {props.clay} clay when fired at the
        recommended {props.cone} cone, we suggest the following throw dimensions
        to achieve the desired sizing of your {props.pottery}:{" "}
      </p>
      <p className="size">Height: {props.height}cm</p>
      <p className="size">Width: {props.width}cm</p>
      <p className="size">Depth: {props.depth}cm</p>
      <button class="button" onClick={props.buttonClicker}>Re-calculate</button>
    </div>
  );
}
