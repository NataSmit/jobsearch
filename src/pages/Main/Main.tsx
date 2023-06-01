import { useState } from "react";

import { JobAdCard } from "../../components/JobAdCard/JobAdCard";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useDebounce } from "../../hooks/useDebounce";
import { Preloader } from "../../components/Preloader/Preloader";
import { useGetJobAdsQuery } from "../../redux/jobAdsApi";
import { Header } from "../../components/Header/Header";

export function Main() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const debouncedJobTitle = useDebounce(jobTitle, 500);
  const debouncedLocation = useDebounce(location, 500);
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

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm
          jobTitle={jobTitle}
          location={location}
          handleJobTitleChange={handleJobTitleChange}
          handleLocationChange={handleLocationChange}
        />
        {isLoading && <Preloader isLoading={isLoading} />}
        <ul className="main__container">
          {data &&
            data.map((jobAd) => <JobAdCard jobAd={jobAd} key={jobAd.id} />)}
        </ul>
      </main>
    </>
  );
}
