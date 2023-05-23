import React from "react";

export function JobInfoPage() {
  return (
    <div className="jobInfoPage__container">
      <div className="jobInfoPage__company">
        <div className="jobInfoPage__logo">
          <img
            src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/ebdc00d18282ccbf63ecbdbf590dcced"
            alt="Logo"
            className="jobInfoPage__logoImage"
          />
        </div>
        <div className="jobInfoPage__companyName">THALES</div>
      </div>
      <div className="jobInfoPage__jobDetails"></div>
    </div>
  );
}
