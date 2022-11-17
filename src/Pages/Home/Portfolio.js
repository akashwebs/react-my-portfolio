import React, { useEffect, useState } from "react";
/* import paintBasic from "../../Aseeset/paintBasic.png";
import todo from "../../Aseeset/todo.png";
import toothcare from "../../Aseeset/toothcare.png";
import babayshop from "../../Aseeset/babyshop.png";
import furniture from "../../Aseeset/furniture-link.png";
import skyconvention from "../../Aseeset/sky-convention.png"; */
import { Link, useNavigate } from "react-router-dom";
const Portfolio = () => {
  const [proejcts, setProject] = useState({});
  const [looding, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-server-express.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      });
  }, []);

  if (looding) {
    return <p>Loading...</p>;
  }

  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading">
        {" "}
        my <span>Projects</span>
      </h1>

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
    </section>
  );
};

export default Portfolio;
