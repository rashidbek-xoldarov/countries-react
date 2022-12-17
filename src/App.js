import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/Countries/CountriesList";
import Header from "./components/Header/Header";
import SingleCountry from "./components/SingleCounty/SingleCountry";

function App() {
  return (
    <>
      <Header />
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
