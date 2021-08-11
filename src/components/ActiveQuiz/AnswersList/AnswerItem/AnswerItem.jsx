import styles from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  const cls = [styles.AnswerItem]
  if(props.state) {
      cls.push(styles[props.state])
  }
  return (
    <li
      onClick={() => props.onAnswerClick(props.answer.id)}
      className={cls.join(' ')}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswerItem;
