import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/combo-meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodApp</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img
          src={mealsImage}
          className={classes["img-tag"]}
          alt="Full of meals"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
