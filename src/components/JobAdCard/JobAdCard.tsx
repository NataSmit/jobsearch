import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import { JobAd } from "../../types/types";
import { addToFavoritesDB } from "../../utils/manageFirestore";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { deleteJobAd } from "../../utils/manageFirestore";

interface Props {
  jobAd: JobAd;
  favorite?: boolean;
}

export function JobAdCard({ jobAd, favorite }: Props) {
  const currentUser = useContext(CurrentUserContext);
  const likeBtnClass = classNames({
    jobAd__likeBtn: true,
    jobAd__likeBtn_state_active: favorite,
  });

  function handleLikeClick() {
    if (favorite) {
      deleteJobAd(jobAd.id);
    } else {
      addToFavoritesDB(currentUser!.uid, jobAd.id);
    }
  }

  return (
    <li className="jobAd">
      <div className="jobAd__time">{jobAd.publicationTime}</div>
      <Link to={`/${jobAd.id}`} className="jobAd__link">
        <h1 className="jobAd__title">{jobAd.title}</h1>
      </Link>
      <div className="jobAd__company">{jobAd.companyName}</div>
      <div className="jobAd__location">{jobAd.location}</div>
      {currentUser && (
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

JobAdCard.propTypes = {
  jobAd: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    publicationTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userID: PropTypes.string,
  }),
  favorite: PropTypes.bool,
};
