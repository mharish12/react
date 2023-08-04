import React from 'react'
import classes from './Card.module.css';

function Card(props) {
  // const classes = "card " + props.className;
  return (<div className={`${classes.card} ${props.className}`}>{props.children}</div>);
}

export default Card;