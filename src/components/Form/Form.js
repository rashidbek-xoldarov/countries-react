import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [inputVal, setInputVale] = useState("");

  const getInputVal = (evt) => {
    setInputVale(evt.target.value);
  };

  const changeRegion = (evt) => {
    props.getSelectValue(evt.target.value);
    setInputVale("");
  };

  const handlerFormSubmit = (evt) => {
    evt.preventDefault();
    props.getInputVal(inputVal);
  };
  return (
    <div className="site-form-wrapper">
      <div className="container">
        <form className="site-form" onSubmit={handlerFormSubmit}>
          <label className="site-form__label">
            <input
              className="site-form__input"
              type="text"
              name="user_search"
              placeholder="Search for a country…"
              value={inputVal}
              onChange={getInputVal}
            />
          </label>
          <select
            className="site-form__select"
            onChange={changeRegion}
            defaultValue={props.region}
          >
            <option value="0" hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Form;
