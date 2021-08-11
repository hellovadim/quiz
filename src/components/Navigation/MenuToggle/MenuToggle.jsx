import styles from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const cls = [styles.MenuToggle, "fa"];
  if (props.isOpen) {
    cls.push("fa-bars");
    cls.push(styles.open);
  } else {
    cls.push(" fa-times");
  }
  return <i className={cls.join(" ")} onClick={() => props.onToggle()}></i>;
};

export default MenuToggle;
