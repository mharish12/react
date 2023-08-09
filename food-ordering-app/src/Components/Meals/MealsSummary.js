import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delived to you in minutes</h2>
      <p>paragraph for description</p>
    </section>
  );
};

export default MealsSummary;
