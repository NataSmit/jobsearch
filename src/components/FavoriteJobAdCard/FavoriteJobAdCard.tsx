import React from "react";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

import { deleteJobAd } from "../../utils/manageFirestore";
import { useGetJobAdByIdQuery } from "../../redux/jobAdsApi";
import { Preloader } from "../Preloader/Preloader";

interface Props {
  jobAdId: string;
}

export function FavoriteJobAdCard({ jobAdId }: Props) {
  const { data, isLoading } = useGetJobAdByIdQuery(jobAdId);

  function deleteFavorite() {
    deleteJobAd(jobAdId);
  }

  if (isLoading) {
    return <Preloader isLoading={isLoading} />;
  }

  return (
    <li className="jobAd">
      <div className="jobAd__time">{data?.creationDate}</div>
      <Link to={`/${jobAdId}`} className="jobAd__link">
        <h1 className="jobAd__title">{data?.jobTitle}</h1>
      </Link>
      <div className="jobAd__company">{data?.companyName}</div>
      <div className="jobAd__location">{data?.location}</div>
      <div className="jobAd_deleteBtn" onClick={deleteFavorite}>
        <TiDelete size={30} />
      </div>
    </li>
  );
}
