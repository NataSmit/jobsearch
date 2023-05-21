import React from "react";
import { useState, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
  AuthError,
} from "firebase/auth";

import classNames from "classnames";

import { auth } from "../../firebaseConfig";
import { reducer, initialState } from "../../utils/registrationReducerData";

export function Registration() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newType, setNewType] = useState(false);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [registrationError, setRegistrationError] = useState<AuthError | any>(
    null
  );
  const mailFormatErr = !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(state.mail);
  const disabledBtn = mailFormatErr || state.password.length < 6;
  const passwordInputClass = classNames({
    registration__input: true,
    registration__input_type_pw: true,
    registration__input_type_error:
      !state.passwordUnfocused && state.password.length < 6,
  });
  const mailInputClass = classNames({
    registration__input: true,
    registration__input_type_error: mailFormatErr && !state.emailUnfocused,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
  }, [currentUser]);

  function handleMailChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "changeMail", payload: e.target.value });
  }

  function handlePwChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "changePassword", payload: e.target.value });
  }

  function handleToggleViewBtn() {
    setNewType(!newType);
  }

  async function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, state.mail, state.password);
    } catch (err: AuthError | any) {
      setRegistrationError(err.code);
    }
    dispatch({ type: "stateAfterFormSubmit" });
  }

  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "email":
        dispatch({ type: "blurMail" });
        setRegistrationError(null);
        break;
      case "password":
        dispatch({ type: "blurPassword" });
        break;
      default:
        dispatch({ type: "blurDefault" });
    }
  }

  return (
    <div className="registration">
      <div className="registration__container">
        <h1 className="registration__title">Регистрация</h1>
        <form className="registration__form" onSubmit={handleRegistration}>
          <label className="registration__lable" htmlFor="mail">
            Электронная почта
          </label>
          <input
            value={state.mail}
            onChange={handleMailChange}
            className={mailInputClass}
            id="mail"
            placeholder="example@mail.ru"
            type="email"
            name="email"
            onBlur={blurHandler}
          />
          <span className="registration__error">
            {!state.emailUnfocused && mailFormatErr && "Неверный формат"}
          </span>
          <label className="registration__lable">
            Пароль
            <input
              value={state.password}
              onChange={handlePwChange}
              className={passwordInputClass}
              id="password"
              type={`${newType ? "text" : "password"}`}
              maxLength={30}
              minLength={6}
              name="password"
              onBlur={blurHandler}
            />
            <button
              className={`registration__view-toggle ${
                newType ? "registration__view-toggle_type_visible" : ""
              }`}
              type="button"
              onClick={handleToggleViewBtn}
            ></button>
          </label>
          <span className="registration__error">
            {!state.passwordUnfocused &&
              state.password.length < 6 &&
              "Длина пароля меньше 6"}
          </span>
          <span className="registration__error">{registrationError}</span>
          <button disabled={disabledBtn} className="registration__button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
