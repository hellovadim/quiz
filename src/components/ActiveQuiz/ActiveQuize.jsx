import styles from "./ActiveQuize.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuize = (props) => {
 const {answerNumber, quizLength} = props;
 
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>{quizLength}</strong>
          &nbsp;
          {props.question}
        </span>
        <small>
         
          {answerNumber} из {quizLength}
        </small>
      </p>
      <AnswersList
      state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};
export default ActiveQuize;
