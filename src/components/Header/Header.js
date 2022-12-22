import "./Header.css";
import Button from "../UI/Button/Button";
import { lang } from "../lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const Header = ({ getState, state }) => {
  const { leng, setLang } = useContext(LangContext);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <h2 className="site-header-title">{lang[leng].header.title}</h2>
            <Button
              className="site-header__btn"
              onClick={(evt) => {
                const theme = evt.target.textContent.split(" ")[0];
                getState(theme.replace(theme[0], theme[0].toLowerCase()));
              }}
            >
              {state.replace(state[0], state[0].toUpperCase())}{" "}
              {lang[leng].header.theme}
            </Button>
            <select
              className="site-header-lang"
              defaultValue={leng}
              onChange={(evt) => {
                setLang(evt.target.value);
              }}
            >
              <option value="en">en</option>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
