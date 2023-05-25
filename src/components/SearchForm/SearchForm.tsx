import React from "react";
import { useState } from "react";
import { ImSearch, ImLocation } from "react-icons/im";

export function SearchForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  function handleJobTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setJobTitle(e.target.value);
  }

  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }

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
          />
        </label>
        <button className="form__submitBtn">Search</button>
      </div>
    </form>
  );
}
