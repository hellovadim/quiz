import React, { Component } from "react";
import styles from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export class Auth extends Component {
  loginHandler = () => {};
  registrHandler = () => {};
  submitHandler = () => {};
  render() {
    return (
      <div className={styles.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form className={styles.AuthForm} onSubmit={this.submitHandler}>
            <Input label="Email" />
            <Input 
            label="Пароль"
            errorMessage={'Test'}
            />
            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registrHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
