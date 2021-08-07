import { Component } from "react";


import styles from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <div className={styles.Layout}>
        <main className={styles.Layout}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
