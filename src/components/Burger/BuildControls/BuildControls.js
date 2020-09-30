import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Chicken", type: "chicken" },
  { label: "Cheese", type: "cheese" },
  { label: "Patty", type: "patty" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((el) => (
      <BuildControl
        key={el.label}
        label={el.label}
        dereaseCount={() => props.dereaseCount(el.type)}
        increaseCount={() => props.increaseCount(el.type)}
        checkForDisable={props.checkForDisable[el.type]}
      />
    ))}
  </div>
);

export default buildControls;
