import styles from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  console.log(props);
  return (
    <li
      onClick={() => props.onAnswerClick(props.answer.id)}
      className={styles.AnswerItem}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswerItem;
