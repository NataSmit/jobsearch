import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
  AuthError,
} from "firebase/auth";

import { auth } from "../../firebaseConfig";

export function Registration() {
  const [newType, setNewType] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUnfocused, setEmailUnfocused] = useState(false);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [passwordUnfocused, setPasswordUnfocused] = useState(false);
  const [registrationError, setRegistrationError] = useState<AuthError | any>(
    null
  );
  const mailFormatErr = !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(mail);
  const disabledBtn = !mailFormatErr && password.length >= 6;

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });

  function handleMailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }

  function handlePwChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleToggleViewBtn() {
    setNewType(!newType);
  }

  async function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, mail, password);
    } catch (err: AuthError | any) {
      setRegistrationError(err.code);
    }
    setMail("");
    setPassword("");
    setEmailUnfocused(false);
    setPasswordUnfocused(false);
  }

  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "email":
        setEmailUnfocused(true);
        setRegistrationError(null);
        break;
      case "password":
        setPasswordUnfocused(true);
        break;
      default:
        setEmailUnfocused(false);
        setPasswordUnfocused(false);
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
            value={mail}
            onChange={handleMailChange}
            className={`registration__input ${
              mailFormatErr && emailUnfocused
                ? "registration__input_type_error"
                : ""
            }`}
            id="mail"
            placeholder="example@mail.ru"
            type="email"
            name="email"
            onBlur={blurHandler}
          />
          <span className="registration__error">
            {emailUnfocused && mailFormatErr && "Неверный формат"}
          </span>
          <label className="registration__lable">
            Пароль
            <input
              value={password}
              onChange={handlePwChange}
              className={`registration__input registration__input_type_pw ${
                passwordUnfocused && password.length < 6
                  ? "registration__input_type_error"
                  : ""
              }`}
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
            {passwordUnfocused &&
              password.length < 6 &&
              "Длина пароля меньше 6"}
          </span>
          <span className="registration__error">{registrationError}</span>
          <button disabled={!disabledBtn} className="registration__button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
