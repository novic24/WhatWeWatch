import React from "react";
import Banner from "./Banner";

const Statistics = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        <h3 className="banner__title">
          Any idea of what to watch? These are the TOP 10 movies of your
          friends:{" "}
        </h3>
        <h1 className="banner__title">Get ideas from your friends</h1>
        <div className="banner__buttons">
          <button className="banner__button">TOP 10 movies</button>
          <button className="banner__button">TOP 10 series</button>
          <button className="banner__button">TOP movies this month</button>
          <button className="banner__button">
            The last movie watched for your friends
          </button>
        </div>
        <h1 className="banner__description">dfgdfgdfgdf</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Statistics;
