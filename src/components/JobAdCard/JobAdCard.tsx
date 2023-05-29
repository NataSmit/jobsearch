import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { TiDelete } from "react-icons/ti";

import { JobAd } from "../../types/types";
import { addToFavoritesDB, deleteJobAd } from "../../utils/manageFirestore";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

interface Props {
  jobAd: JobAd;
  favorites?: boolean;
}

export function JobAdCard({ jobAd, favorites }: Props) {
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setLiked] = useState(false);
  const likeBtnClass = classNames({
    jobAd__likeBtn: true,
    jobAd__likeBtn_state_active: isLiked || favorites,
  });

  function handleLikeClick() {
    setLiked(!isLiked);
    addToFavoritesDB(currentUser.uid, jobAd.id);
  }

  function deleteFavorite() {
    deleteJobAd(jobAd.id);
  }

  return (
    <li className="jobAd">
      <div className="jobAd__time">{jobAd.publicationTime}</div>
      <Link to={`/${jobAd.id}`} className="jobAd__link">
        <h1 className="jobAd__title">{jobAd.title}</h1>
      </Link>
      <div className="jobAd__company">{jobAd.companyName}</div>
      <div className="jobAd__location">{jobAd.location}</div>
      {favorites ? (
        <div className="jobAd_deleteBtn" onClick={deleteFavorite}>
          <TiDelete size={30} />
        </div>
      ) : (
        <button
          className={likeBtnClass}
          aria-label="Нравится"
          type="button"
          onClick={handleLikeClick}
        ></button>
      )}
    </li>
  );
}
