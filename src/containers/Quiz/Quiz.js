import { Component } from "react";
import styles from "./Quiz.module.css";

import ActiveQuize from "../../components/ActiveQuiz/ActiveQuize";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        answers: [
          { text: "Черный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log("answer id :", answerId);
  };

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuize
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
