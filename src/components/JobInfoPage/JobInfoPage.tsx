import React from "react";

export function JobInfoPage() {
  return (
    <div className="jobInfoPage">
      <div className="jobInfoPage__container">
        <div className="jobInfoPage__company">
          <div className="jobInfoPage__logo">
            <img
              src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/ebdc00d18282ccbf63ecbdbf590dcced"
              alt="Logo"
              className="jobInfoPage__logoImage"
            />
          </div>
          <div className="jobInfoPage__wrapper">
            <div className="jobInfoPage__companyInfo">
              <p className="jobInfoPage__companyName">Thales</p>
              <p className="jobInfoPage__companySite">
                https://example.com/blogr
              </p>
            </div>
            <p className="jobInfoPage__companyLink">
              <a className="jobInfoPage__companyLink" href="/">
                Company Site
              </a>
            </p>
          </div>
        </div>
        <div className="jobInfoPage__jobDetails">
          <div className="jobInfoPage__positionContainer">
            <div className="jobInfoPage__position">
              <p className="jobInfoPage__text jobInfoPage__time">20h ago</p>
              <p className="jobInfoPage__text jobInfoPage__type">Part Time</p>
              <h1 className="jobInfoPage__title">Haskell and PureScript Dev</h1>
              <p className="jobInfoPage__country">United States</p>
            </div>
            <button className="jobInfoPage__applyBtn">Apply Now</button>
          </div>

          <div className="jobInfoPage__description">
            <p>
              Blogr is looking for a part-time developer to join our six-strong
              team of full-stack engineers. Our core development values are
              strong, static typing and correctness, rigorous automation (in
              both testing and infrastructure) and everyone having a say.
              Requirements We are looking to carefully add great developers
              which care about solving problems & which have been in a
              relationship with Purescript and/or Haskell for at least 3 years
              (Not necessarily monogamous though). You have a knack for UI
              design Have Haskell or Purescript knowledge/hacking under your
              belt. An experienced engineer familiar with automated testing and
              deployment. Experienced with functional programming and
              domain-driven design or simply interested and capable of learning
              on the job. What You Will Do The role is more frontend-focused
              where you will be tasked to build browser-based UIs for Haskell
              applications. 1 Build up our tech stack around Haskell and
              introduce best practices 2 Contribute to the design of our
              conversational engine and the architecture supporting it 3 Design
              new UIs, working closely with users, stakeholders and the backend
              team. 4 Maximize robustness, performance, and scalability of
              solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
