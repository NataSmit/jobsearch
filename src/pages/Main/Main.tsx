import { useState, useContext } from "react";

import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useDebounce } from "../../hooks/useDebounce";
import { Preloader } from "../../components/Preloader/Preloader";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { Header } from "../../components/Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useAppDispatch } from "../../redux/hook";
import { addHistory } from "../../redux/historySlice";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";
import {
  getLastSearchParamsFromLS,
  saveLastSearchParamsToLS,
  isAddedToFavorites,
} from "../../utils/utils";

export function Main() {
  const currentUser = useContext(CurrentUserContext);
  const favorites = useCurrentUserFavorites() || [];
  const dispatch = useAppDispatch();
  const lastSearchParams = getLastSearchParamsFromLS();
  const [jobTitle, setJobTitle] = useState(lastSearchParams.jobTitle || "");
  const [location, setLocation] = useState(lastSearchParams.location || "");
  const debouncedJobTitle = useDebounce(jobTitle, 1500);
  const debouncedLocation = useDebounce(location, 1500);
  const { data, isLoading } = useGetJobAdsQuery(
    {
      query: debouncedJobTitle,
      location: debouncedLocation,
    },
    {
      skip: debouncedJobTitle.length < 3 || debouncedLocation.length < 3,
    }
  );

  function handleJobTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setJobTitle(e.target.value);
  }

  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }

  function handleSearchFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saveLastSearchParamsToLS(jobTitle, location);
    if (currentUser.uid) {
      dispatch(addHistory({ jobTitle, location }));
    }
  }

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm
          jobTitle={jobTitle}
          location={location}
          handleJobTitleChange={handleJobTitleChange}
          handleLocationChange={handleLocationChange}
          handleSearchFormSubmit={handleSearchFormSubmit}
        />
        {isLoading && <Preloader isLoading={isLoading} />}
        <ul className="main__container">
          {data &&
            data.map((jobAd) => (
              <JobAdCard
                jobAd={jobAd}
                key={jobAd.id}
                isAddedToFavorites={isAddedToFavorites(favorites, jobAd.id)}
              />
            ))}
        </ul>
      </main>
    </>
  );
}
