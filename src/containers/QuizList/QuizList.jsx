import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./QuizList.module.css";
import Loader from "../../components/UI/Loader/Loader";

export class QuizList extends Component {
  state = {
    quizes: [],
    loading: true,
  };

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://react-quiz-33157-default-rtdb.firebaseio.com/quizes.json"
      );
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест ${index + 1}`,
        });
      });
      this.setState({
        quizes,
        loading: !this.state.loading,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className={styles.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

export default QuizList;
