import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { clearHistory } from "../../redux/historySlice";
import { deleteUserHistoryFromLS } from "../../utils/utils";

export function History() {
  const { history } = useAppSelector((state) => state.historySlice);
  const dispatch = useAppDispatch();
  const currentUserID = localStorage.getItem("currentUserID") || "";

  function deleteHistory() {
    dispatch(clearHistory());
    deleteUserHistoryFromLS(currentUserID);
  }

  return (
    <>
      <Header />
      <div className="main history">
        <div className="history__info">
          {history.length > 0
            ? "Previously you searched the following job ads:"
            : "There're no search results"}
        </div>
        <div className="history__body">
          {history.map(({ jobTitle, location }, index) => (
            <Link
              to={`/search/${jobTitle}/${location}`}
              key={index}
              className="history__link"
            >
              Position: {jobTitle} and location: {location}
            </Link>
          ))}
        </div>
        {history.length > 0 && (
          <button className="history__deleteBtn" onClick={deleteHistory}>
            Clear history
          </button>
        )}
      </div>
    </>
  );
}
