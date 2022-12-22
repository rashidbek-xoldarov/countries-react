import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../context/LangContext";
import { lang } from "../lang/Lang";

import "./CountriesItem.css";

const CountriesItem = ({ name, img, population, region, capital }) => {
  const { leng } = useContext(LangContext);

  return (
    <li className="countries__item">
      <Link to={"/single/" + name} className="countries-link">
        <img
          className="countries-img"
          src={img}
          alt="countries flag"
          width="264"
          height="160"
        />
        <div className="countries-info">
          <h2 className="countries-title">{name}</h2>
          <dl className="difinition-list">
            <div className="difinition-inner">
              <dt className="difinition-title">
                {lang[leng].card.population}:
              </dt>
              <dd className="difinition-text">{population}</dd>
            </div>
            <div className="difinition-inner">
              <dt className="difinition-title">{lang[leng].card.region}: </dt>
              <dd className="difinition-text">{region}</dd>
            </div>
            <div className="difinition-inner">
              <dt className="difinition-title">{lang[leng].card.capital}:</dt>
              <dd className="difinition-text">{capital}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </li>
  );
};

export default CountriesItem;
