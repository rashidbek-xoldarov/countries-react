import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/Countries/CountriesList";
import Header from "./components/Header/Header";
import SingleCountry from "./components/SingleCounty/SingleCountry";

function App() {
  const [state, setState] = useState(localStorage.getItem("theme") || "light");

  const body = document.querySelector(".body");
  body.classList.remove(state === "light" ? "dark" : "light");
  body.classList.add(state);
  localStorage.setItem("theme", state);

  const darkMode = (text) => {
    setState(text);
  };

  return (
    <>
      <Header
        getState={darkMode}
        state={state === "light" ? "dark" : "light"}
      />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/single/:name" element={<SingleCountry />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
