import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Hamburger.module.css";

const hamburger = (props) => (
    <Auxiliary>
        <div className={classes.Menu}>MENU</div>
        <div className={classes.MobileMenu} onClick={props.clickHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Auxiliary>
);

export default hamburger