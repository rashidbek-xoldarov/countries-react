import React from "react";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import CountriesItem from "./CountriesItem";

import "./CountriesList.css";

const CountriesList = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/${
        text ? `name/${text}` : region ? `/region/${region}` : "all"
      }`,
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [text, region]);

  const updateText = (text) => {
    setText(text);
    setRegion("");
  };

  const UpdateSelectValue = (region) => {
    setRegion(region);
    setText("");
  };

  return (
    <section className="countries">
      <div className="container">
        <div className="countries-inner">
          <Form
            getInputVal={updateText}
            getSelectValue={UpdateSelectValue}
            region={region}
          />
          <ul className="countries-list">
            {data.map((item) => (
              <CountriesItem
                id={item.id}
                key={item.name.common}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                img={item.flags.svg}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CountriesList);
