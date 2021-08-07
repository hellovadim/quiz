import styles from "./ActiveQuize.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuize = (props) => (
  <div className={styles.ActiveQuiz}>
    <p className={styles.Question}>
      <span>
        <strong>1.</strong>
        &nbsp;
        {props.question}
      </span>
      <small> 4 из 12</small>
    </p>
    <AnswersList 
    answers={props.answers} 
    onAnswerClick={props.onAnswerClick} />
  </div>
);
export default ActiveQuize;
