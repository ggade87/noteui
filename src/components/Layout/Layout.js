import React from "react";
import Aux from "../hoc/Auxillary";
import Navigation from "./Navigation/Navigation";
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
        <Navigation />
        zzxzx
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
