import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./SingleCountry.css";

const SingleCountry = () => {
  const [obj, setObj] = useState("");

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setObj(data[0]));
  });

  return (
    <section className="single">
      <div className="container">
        {obj ? (
          <div className="single-inner">
            <button className="single-btn" onClick={() => navigate("/")}>
              Back
            </button>
            <div className="single-info-wrapper">
              <img
                className="single-info-img"
                src={obj.flags.svg}
                alt="single country flag"
                width="560"
                height="400"
              />
              <div className="single-info">
                <h3 className="single-info-title">{obj.name?.common}</h3>
                <div className="single-info-list-wrapper">
                  <ul className="single-info-list">
                    <li className="single-info-item">
                      Native Name: {obj.name?.common}
                    </li>
                    <li className="single-info-item">
                      Population: {obj.population}
                    </li>
                    <li className="single-info-item">Region: {obj.region}</li>
                    <li className="single-info-item">
                      Sub Region: {obj.subregion}
                    </li>
                    <li className="single-info-item">Capital: {obj.capital}</li>
                  </ul>
                  <ul className="single-info-list">
                    <li className="single-info-item">
                      Top Lavel Domain: {obj.tld}
                    </li>
                    <li className="single-info-item">
                      Currencies: {Object.keys(obj.currencies)}
                    </li>
                    <li className="single-info-item">
                      Language: {Object.values(obj.languages).join(", ")}
                    </li>
                  </ul>
                </div>
                <div className="single-info-border-wrapper">
                  <span className="single-info-border-title">
                    Border Countries:
                  </span>
                  {obj.borders ? (
                    obj.borders.map((item) => (
                      <button className="single-info-border">{item}</button>
                    ))
                  ) : (
                    <span className="single-info-border-title">No borders</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Waiting...</p>
        )}
      </div>
    </section>
  );
};

export default SingleCountry;
