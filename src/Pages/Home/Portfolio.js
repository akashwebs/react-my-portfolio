import React from "react";

import { Link } from "react-router-dom";
import Loading from "../Loading";
const Portfolio = () => {
  const {
    isLoading,
    error,
    data: proejcts,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch(`https://portfolio-server-express.vercel.app/projects`).then(
        (res) => res.json()
      ),
  });

  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading">
        my <span>Projects</span>
      </h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div class="box-container">
          {proejcts?.map((data, index) => (
            <div key={index} class="box">
              <div className="image-wrap">
                <img src={data?.image[0]} alt="" />
              </div>
              <p className="text-3xl mb-3 text-[#27ae60] text-left px-4">
                {data?.projectName}
              </p>
              <p className="text-xl pb-2 text-white text-left px-4">
                {data.details.slice(0, 150)}
              </p>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr" }}
                class="content"
              >
                <h3 style={{ display: "block" }}>{data?.projectName}</h3>
                <div>
                  <a
                    style={{
                      padding: "7px 15px",
                      background: "#27AE60",
                      color: "#fff",
                      borderRadius: "4px",
                      fontSize: "16px",
                    }}
                    href={data.live[0]}
                  >
                    Live
                  </a>
                  <Link
                    to={`/project/${data._id}`}
                    style={{
                      padding: "7px 15px",
                      background: "#27AE60",
                      marginLeft: "7px",
                      color: "#fff",
                      borderRadius: "4px",
                      fontSize: "16px",
                    }}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
