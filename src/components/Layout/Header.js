import React from "react";

import maelsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "../UI/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Restaurant App</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={maelsImage} alt="Delicious food" />
      </div>
    </>
  );
};

export default Header;
