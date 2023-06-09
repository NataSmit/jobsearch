import React from "react";
import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();

  function handleBackBtnClick() {
    navigate(-1);
  }

  return (
    <div className="notFound">
      <div className="notFound__body">
        <p className="notFound__subtitle">
          Это страница-заглушка, разработка которой не предусмотрена в рамках
          этого проекта
        </p>
        <button className="notFound__btn" onClick={handleBackBtnClick}>
          Назад
        </button>
      </div>
    </div>
  );
}
