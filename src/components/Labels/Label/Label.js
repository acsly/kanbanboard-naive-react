import React from 'react';
import classes from './Label.css';

const label = (props) => (
    <p className={classes.Label} style={{ backgroundColor: props.color }}>{props.name} |
        <button onClick={(cardIndex, columnIndex) => props.removeLabelClicked(props.id, cardIndex, columnIndex)}>X</button>
    </p>
);

export default label;