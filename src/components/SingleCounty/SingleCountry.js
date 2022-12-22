import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LangContext } from "../../context/LangContext";
import { lang } from "../lang/Lang";

import "./SingleCountry.css";

const SingleCountry = () => {
  const [obj, setObj] = useState("");
  const { leng } = useContext(LangContext);

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
              {lang[leng].single.btn}
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
                      {lang[leng].single.name}: {obj.name?.common}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.population}: {obj.population}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.region}: {obj.region}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.subRegion}: {obj.subregion}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.capital}: {obj.capital}
                    </li>
                  </ul>
                  <ul className="single-info-list">
                    <li className="single-info-item">
                      {lang[leng].single.domain}: {obj.tld}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.currencies}:{" "}
                      {Object.keys(obj.currencies)}
                    </li>
                    <li className="single-info-item">
                      {lang[leng].single.language}:{" "}
                      {Object.values(obj.languages).join(", ")}
                    </li>
                  </ul>
                </div>
                <div className="single-info-border-wrapper">
                  <span className="single-info-border-title">
                    {lang[leng].single.border}:
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
