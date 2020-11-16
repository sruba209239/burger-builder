import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliary>
      <BackDrop show={props.open} backdropClicked={props.closeHandler} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
