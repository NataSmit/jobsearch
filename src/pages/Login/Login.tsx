import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import classNames from "classnames";

import { auth } from "../../firebaseConfig";
import { emailTemplateRegex } from "../../utils/regex";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Login() {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [newType, setNewType] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUnfocused, setEmailUnfocused] = useState(true);
  const [passwordUnfocused, setPasswordUnfocused] = useState(true);
  const [loginError, setLoginError] = useState<AuthError | any>(null);
  const mailFormatErr = !emailTemplateRegex.test(mail);
  const disabledBtn = mailFormatErr || password.length < 6;
  const passwordInputClass = classNames({
    login__input: true,
    login__input_type_pw: true,
    login__input_type_error: !passwordUnfocused && password.length < 6,
  });
  const mailInputClass = classNames({
    login__input: true,
    login__input_type_error: mailFormatErr && !emailUnfocused,
  });
  const toggleViewButtonClass = classNames({
    login__viewToggle: true,
    login__viewToggle_type_visible: newType,
  });

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  function handleToggleViewBtn() {
    setNewType(!newType);
  }

  function handleMailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }

  function handlePwChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function setDefaultState() {
    setMail("");
    setPassword("");
    setEmailUnfocused(true);
    setPasswordUnfocused(true);
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, mail, password);
    } catch (err) {
      const typedAuthErr = err as AuthError;
      setLoginError(typedAuthErr.code);
    }
    setDefaultState();
  }

  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "email":
        setEmailUnfocused(false);
        setLoginError(null);
        break;
      case "password":
        setPasswordUnfocused(false);
        break;
      default:
        setEmailUnfocused(true);
        setPasswordUnfocused(true);
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Вход</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <label className="login__lable" htmlFor="mail">
            Электронная почта
          </label>
          <input
            value={mail}
            onChange={handleMailChange}
            className={mailInputClass}
            id="mail"
            placeholder="example@mail.ru"
            type="email"
            onBlur={blurHandler}
            name="email"
          />
          <span className="login__error">
            {!emailUnfocused && mailFormatErr && "Почта не валидна"}
          </span>
          <label className="login__lable">
            Пароль
            <input
              className={passwordInputClass}
              id="password"
              type={`${newType ? "text" : "password"}`}
              value={password}
              onChange={handlePwChange}
              onBlur={blurHandler}
              name="password"
            />
            <button
              className={toggleViewButtonClass}
              type="button"
              onClick={handleToggleViewBtn}
            ></button>
          </label>
          <span className="login__error">
            {!passwordUnfocused &&
              password.length < 6 &&
              "Минимальная длина пароля 6 символов"}
          </span>
          <span className="login__error">{loginError}</span>
          <button
            className="login__button login__button_type_login"
            disabled={disabledBtn}
          >
            Войти
          </button>

          <Link to="/signup" className="login__redirect">
            Нет аккаунта?{" "}
            <span className="login__redirect login__redirect_type_span">
              Регистрация
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
