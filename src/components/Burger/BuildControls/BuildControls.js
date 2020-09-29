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
      <BuildControl key={el.label} label={el.label} />
    ))}
  </div>
);

export default buildControls;
