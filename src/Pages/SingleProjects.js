import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "./Loading";
const SingleProjects = () => {
  const { idName } = useParams();

  const {
    isLoading,
    error,
    data: proejct,
  } = useQuery({
    queryKey: [idName],
    queryFn: () =>
      fetch(
        `https://portfolio-server-express.vercel.app/projects/${idName}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 text-start my-8">
      <div id="signle-port">
        <div className="h-[600px] md:h-[400px] p-5">
          <Carousel className="text-center">
            {proejct?.image?.map((img) => (
              <div>
                <img
                  style={{
                    height: "350px",
                    width: "350px",
                    objectFit: "cover",
                    objectPosition: "left top",
                  }}
                  src={img}
                  alt=""
                  className="h-[350]"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div id="signle-port" className="p-8 mt-48 md:mt-0">
        <p className="text-5xl ">{proejct.projectName}</p>
        <p className="text-2xl mt-5">{proejct.details}</p>
        <p className="mt-8 text-3xl">Projects Features:</p>
        <ul className="mb-5">
          {proejct?.point?.map((p) => (
            <li className="text-xl mt-2"> → {p}</li>
          ))}
        </ul>
        <div>
          <p className="text-3xl mt-8 mb-5">Technology: </p>
          {proejct?.language?.map((l) => (
            <button className="px-8 py-3 bg-red-900 mr-2 mb-2 rounded-md">
              {l}
            </button>
          ))}
        </div>
        <div>
          <p className="text-3xl mt-8 mb-5">Link: </p>
          <a
            className="btn"
            href={`${proejct?.live[0]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            className="btn"
            href={`${proejct?.live[1]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github(Client)
          </a>
          {proejct?.live[2] && (
            <a
              className="btn mr-5 mb-5 "
              href={`${proejct?.live[2]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab FaGithub"></span>
              Github(Server)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;
