import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { Preloader } from "../../components/Preloader/Preloader";

export function SearchPage() {
  const { query = "", location = "" } = useParams();
  console.log("params", query, location);
  const { data, isLoading } = useGetJobAdsQuery({ query, location });

  return (
    <>
      <Header />
      <div>
        {isLoading && <Preloader isLoading={isLoading} />}
        <ul className="main__container">
          {data &&
            data.map((jobAd) => <JobAdCard jobAd={jobAd} key={jobAd.id} />)}
        </ul>
      </div>
    </>
  );
}
