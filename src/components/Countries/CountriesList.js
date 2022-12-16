import CountriesItem from "./CountriesItem";

import "./CountriesList.css";

const CountriesList = ({ data }) => {
  return (
    <section className="countries">
      <div className="container">
        <div className="countries-inner">
          <ul className="countries-list">
            {data.map((item) => (
              <CountriesItem
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

export default CountriesList;
