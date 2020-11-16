import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar clickHandler={this.sideDrawerOpenHandler} hamBurgerClick={this.sideDrawerOpenHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closeHandler={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
