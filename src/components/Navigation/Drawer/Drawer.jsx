import { Component } from "react";
import styles from "./Drawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="!#">Link {link}</a>
        </li>
      );
    });
  }

  render() {
    const cls = [styles.Drawer];

    if (this.props.isOpen) {
      cls.push(styles.close);
    }
    return (
      <>
      <nav className={cls.join(" ")}>
        <ul>{this.renderLinks()}</ul>
      </nav>
      {!this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
      
      </>
    );
  }
}

export default Drawer;
