import React from "react";
import { ImSearch, ImLocation } from "react-icons/im";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface Props {
  jobTitle: string;
  location: string;
  handleJobTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function SearchForm({
  jobTitle,
  location,
  handleJobTitleChange,
  handleLocationChange,
  handleSearchFormSubmit,
  isLoading,
}: Props) {
  return (
    <form className="form" onSubmit={handleSearchFormSubmit}>
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

        <button className="form__submitBtn" disabled={isLoading}>
          Search
        </button>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  handleJobTitleChange: PropTypes.func.isRequired,
  handleLocationChange: PropTypes.func.isRequired,
  handleSearchFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
