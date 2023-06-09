import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useDebounce } from "../../hooks/useDebounce";
import { Preloader } from "../../components/Preloader/Preloader";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useAppDispatch } from "../../redux/hook";
import { addHistory } from "../../redux/historySlice";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";
import { isInFavorites } from "../../utils/utils";

export default function Main() {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const favorites = useCurrentUserFavorites() || [];
  const dispatch = useAppDispatch();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
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
    navigate(`/search/${jobTitle}/${location}`);
    if (currentUser) {
      dispatch(addHistory({ jobTitle, location }));
    }
  }

  return (
    <main className="main">
      <SearchForm
        jobTitle={jobTitle}
        location={location}
        handleJobTitleChange={handleJobTitleChange}
        handleLocationChange={handleLocationChange}
        handleSearchFormSubmit={handleSearchFormSubmit}
        isLoading={isLoading}
      />
      {isLoading && <Preloader isLoading={isLoading} />}
      <ul className="main__container">
        {data &&
          data
            .slice(0, 3)
            .map((jobAd) => (
              <JobAdCard
                jobAd={jobAd}
                key={jobAd.id}
                favorite={isInFavorites(favorites, jobAd.id)}
              />
            ))}
      </ul>
      <div className="main__infoBlock">
        {!data && !isLoading && (
          <div className="main__info">
            In the project is used Indeed API. Indeed is an American employment
            site. It aggregates job listings from thousands of websites,
            including job boards, staffing firms, associations, and company
            career pages. With Indeed, you can search millions of jobs online to
            find the next step in your career.
          </div>
        )}
        {data && data.length > 3 && (
          <div className="main__info">To view more results click Search</div>
        )}
      </div>
    </main>
  );
}
