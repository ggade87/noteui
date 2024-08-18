import React from "react";
import Aux from "../hoc/Auxillary";
import Navigation from "./Navigation/Navigation";
import "./Layout.css";
import MainMenu from "../MainMenu/MainMenu";
class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {};
  render() {
    return (
      <Aux>
        <div class="topnav">
          <Navigation />
        </div>
        <div class="row">
          <div class="column">
            <MainMenu></MainMenu>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <main>{this.props.children}</main>
          </div>
        </div>
        <div class="footer">
          <h2>Footer</h2>
        </div>
      </Aux>
    );
  }
}

export default Layout;
