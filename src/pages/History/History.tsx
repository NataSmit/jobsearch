import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { clearHistory, getHistoryFromLS } from "../../redux/historySlice";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function History() {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser?.uid;
  const dispatch = useAppDispatch();
  const { history } = useAppSelector((state) => state.historySlice);

  useEffect(() => {
    dispatch(getHistoryFromLS({ userId }));
  }, [userId, dispatch, currentUser]);

  function deleteHistory() {
    dispatch(clearHistory());
  }

  return (
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
  );
}
