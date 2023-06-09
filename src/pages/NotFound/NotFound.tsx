import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function handleBackBtnClick() {
    navigate(-1);
  }

  return (
    <div className="notFound">
      <div className="notFound__body">
        <h1 className="notFound__title">404</h1>
        <p className="notFound__subtitle">Страница не найдена</p>
        <button className="notFound__btn" onClick={handleBackBtnClick}>
          Назад
        </button>
      </div>
    </div>
  );
}
