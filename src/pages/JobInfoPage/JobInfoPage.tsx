import React from "react";
import { useParams, Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { useGetJobAdByIdQuery } from "../../redux/jobAdsApi";
import NoIcon from "../../images/noIcon.svg";

export default function JobInfoPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetJobAdByIdQuery(id || "");

  if (isLoading) return <RotatingLines strokeColor="#5964e0" />;

  return (
    <div className="jobInfoPage">
      <div className="jobInfoPage__container">
        <div className="jobInfoPage__company">
          <div className="jobInfoPage__logo">
            <img
              src={data?.logo || NoIcon}
              alt="Logo"
              className="jobInfoPage__logoImage"
            />
          </div>
          <div className="jobInfoPage__wrapper">
            <div className="jobInfoPage__companyInfo">
              <p className="jobInfoPage__companyName">
                {data?.companyName || "No name provided"}
              </p>
              <p className="jobInfoPage__companySite">{data?.link}</p>
            </div>
            <p className="jobInfoPage__companyLink">
              <a
                className="jobInfoPage__companyLink"
                href={data?.link}
                target="_blank"
                rel="noreferrer"
              >
                Company Site
              </a>
            </p>
          </div>
        </div>
        <div className="jobInfoPage__jobDetails">
          <div className="jobInfoPage__positionContainer">
            <div className="jobInfoPage__position">
              <p className="jobInfoPage__text jobInfoPage__time">
                {data?.creationDate}
              </p>
              <p className="jobInfoPage__text jobInfoPage__type">
                {data?.jobType}
              </p>
              <h1 className="jobInfoPage__title">{data?.jobTitle}</h1>
              <p className="jobInfoPage__country">{data?.location}</p>
            </div>
            <Link to="/apply">
              <button className="jobInfoPage__applyBtn">Apply Now</button>
            </Link>
          </div>

          <div className="jobInfoPage__description">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
