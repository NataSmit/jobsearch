import React from "react";
import { ImSearch, ImLocation } from "react-icons/im";

interface Props {
  jobTitle: string;
  location: string;
  handleJobTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({
  jobTitle,
  location,
  handleJobTitleChange,
  handleLocationChange,
}: Props) {
  return (
    <form className="form">
      <div className="form__container">
        <label htmlFor="title" className="form__lable">
          <ImSearch color="#5964e0" size={24} />
          <input
            value={jobTitle}
            onChange={handleJobTitleChange}
            className="form__input"
            placeholder="Search by title..."
            id="title"
            required
          />
        </label>
        <label htmlFor="location" className="form__lable">
          <ImLocation color="#5964e0" size={24} />
          <input
            value={location}
            onChange={handleLocationChange}
            className="form__input"
            placeholder="Search by location..."
            id="location"
            required
          />
        </label>
        <button className="form__submitBtn">Search</button>
      </div>
    </form>
  );
}
