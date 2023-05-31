import React from "react";
import { useParams } from "react-router-dom";

import { useGetJobAdByIdQuery } from "../../redux/jobAdsApi";

export function JobInfoPage() {
  const { id } = useParams();
  const { data } = useGetJobAdByIdQuery(id || "");

  return (
    <div className="jobInfoPage">
      <div className="jobInfoPage__container">
        <div className="jobInfoPage__company">
          <div className="jobInfoPage__logo">
            <img
              src={data?.logo}
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
            <button className="jobInfoPage__applyBtn">Apply Now</button>
          </div>

          <div className="jobInfoPage__description">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
