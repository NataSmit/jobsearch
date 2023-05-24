import { Link } from "react-router-dom";

import { jobAds } from "../../utils/data";
import { JobAdCard } from "../JobAdCard/JobAdCard";
import { convertServerJobAdData } from "../../utils/utils";
import { JobAd } from "../../types/types";

export function Main() {
  const formattedJobAds: JobAd[] = jobAds.map((jobAd) =>
    convertServerJobAdData(jobAd)
  );

  return (
    <main className="main">
      <ul className="main__container">
        {formattedJobAds.map((jobAd) => (
          <Link to={`/${jobAd.id}`} className="main__link" key={jobAd.id}>
            <JobAdCard jobAd={jobAd} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
