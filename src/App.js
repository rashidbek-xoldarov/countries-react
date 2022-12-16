import { useEffect, useState } from "react";
import "./App.css";
import CountriesList from "./components/Countries/CountriesList";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
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
    <>
      <Header />
      <main className="site-main">
        <Form
          getInputVal={updateText}
          getSelectValue={UpdateSelectValue}
          region={region}
        />
        <CountriesList data={data} />
      </main>
    </>
  );
}

export default App;
