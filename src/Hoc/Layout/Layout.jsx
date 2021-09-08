import { Component } from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

import styles from "./Layout.module.css";

class Layout extends Component {
  state = {
    menu: true,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  menuCloseHandler = () => {
    this.setState({
      menu: true,
    });
  };
  render() {
    return (
      <div className={styles.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Drawer 
          isOpen={this.state.menu} 
          onClose={this.menuCloseHandler} 
          isAuthenticated={this.props.isAuthenticated}
          />
        <main className={styles.Layout}>{this.props.children}</main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}
export default connect(mapStateToProps)(Layout);
