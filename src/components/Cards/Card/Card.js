import React from 'react';
import classes from './Card.css';

const card = (props) => (
    <div className={classes.Card}>
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
);

export default card;