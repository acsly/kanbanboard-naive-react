import React from 'react';
import classes from './Label.css';

const label = (props) => (
    <p className={classes.Label} style={{ backgroundColor: props.color }}>{props.name}</p>
);

export default label;