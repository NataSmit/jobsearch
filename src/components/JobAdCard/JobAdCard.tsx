import React from "react";

import { JobAd } from "../../types/types";

interface Props {
  jobAd: JobAd;
}

export function JobAdCard({ jobAd }: Props) {
  return (
    <li className="jobAd">
      <div className="jobAd__time">{jobAd.publicationTime}</div>
      <h1 className="jobAd__title">{jobAd.title}</h1>
      <div className="jobAd__company">{jobAd.companyName}</div>
      <div className="jobAd__location">{jobAd.location}</div>
    </li>
  );
}
