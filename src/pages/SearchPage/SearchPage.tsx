import React from "react";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { Preloader } from "../../components/Preloader/Preloader";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { addHistory } from "../../redux/historySlice";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";
import { isInFavorites } from "../../utils/utils";
import { useAppDispatch } from "../../redux/hook";

export default function SearchPage() {
  const { query = "", location = "" } = useParams();
  const { data, isLoading } = useGetJobAdsQuery({ query, location });
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const favorites = useCurrentUserFavorites() || [];
  const dispatch = useAppDispatch();
  const [jobTitle, setJobTitle] = useState(query);
  const [jobLocation, setJobLocation] = useState(location);

  function handleJobTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setJobTitle(e.target.value);
  }

  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setJobLocation(e.target.value);
  }

  function handleSearchFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search/${jobTitle}/${location}`);
    if (currentUser) {
      dispatch(addHistory({ jobTitle, location: jobLocation }));
    }
  }

  return (
    <main className="main">
      <SearchForm
        jobTitle={jobTitle}
        location={jobLocation}
        handleJobTitleChange={handleJobTitleChange}
        handleLocationChange={handleLocationChange}
        handleSearchFormSubmit={handleSearchFormSubmit}
        isLoading={isLoading}
      />
      {isLoading && <Preloader isLoading={isLoading} />}
      <ul className="main__container">
        {data &&
          data.map((jobAd) => (
            <JobAdCard
              jobAd={jobAd}
              key={jobAd.id}
              favorite={isInFavorites(favorites, jobAd.id)}
            />
          ))}
      </ul>
    </main>
  );
}
