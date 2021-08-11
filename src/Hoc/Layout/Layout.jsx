import { Component } from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

import styles from "./Layout.module.css";

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  menuCloseHandler = () => {
    this.setState({
      menu: true
    })
  } 
  render() {
    return (
      <div className={styles.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <main className={styles.Layout}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
