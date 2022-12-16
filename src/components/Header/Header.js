import React from "react";

import "./Header.css";
import logo from "../../assets/images/logo.svg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <a className="site-header__logo" href="../../../public/index.html">
              <img
                className="site-header__logo-img"
                src={logo}
                alt="site header logo"
                width="234"
                height="33"
              />
            </a>
            <Button className="site-header__btn">Dark Mode</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
