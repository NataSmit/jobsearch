import React from "react";
import { useParams } from "react-router-dom";

import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { Preloader } from "../../components/Preloader/Preloader";

export default function SearchPage() {
  const { query = "", location = "" } = useParams();
  console.log("params", query, location);
  const { data, isLoading } = useGetJobAdsQuery({ query, location });

  return (
    <div>
      {isLoading && <Preloader isLoading={isLoading} />}
      <ul className="main__container">
        {data &&
          data.map((jobAd) => <JobAdCard jobAd={jobAd} key={jobAd.id} />)}
      </ul>
    </div>
  );
}
