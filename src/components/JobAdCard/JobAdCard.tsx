import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { JobAd } from "../../types/types";
import { addToFavoritesDB } from "../../utils/manageFirestore";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

interface Props {
  jobAd: JobAd;
  isAddedToFavorites?: boolean;
}

export function JobAdCard({ jobAd, isAddedToFavorites }: Props) {
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setLiked] = useState(false);
  const likeBtnClass = classNames({
    jobAd__likeBtn: true,
    jobAd__likeBtn_state_active: isLiked || isAddedToFavorites,
  });

  function handleLikeClick() {
    setLiked(!isLiked);
    addToFavoritesDB(currentUser.uid, jobAd);
  }

  return (
    <li className="jobAd">
      <div className="jobAd__time">{jobAd.publicationTime}</div>
      <Link to={`/${jobAd.id}`} className="jobAd__link">
        <h1 className="jobAd__title">{jobAd.title}</h1>
      </Link>
      <div className="jobAd__company">{jobAd.companyName}</div>
      <div className="jobAd__location">{jobAd.location}</div>
      <button
        className={likeBtnClass}
        aria-label="Нравится"
        type="button"
        onClick={handleLikeClick}
      ></button>
    </li>
  );
}
