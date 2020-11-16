import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import Hamburger from "../Hamburger/Hamburger";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Hamburger clickHandler={props.hamBurgerClick}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
