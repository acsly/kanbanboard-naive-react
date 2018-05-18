import React from 'react';
import classes from './Card.css';

const card = (props) => (
    <div className={classes.Card}>
        <button className={classes.deleteBtn} onClick={(index) => props.deleteCardClicked(props.id, index)}>X</button>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.id}</p>
    </div>
);

export default card;