import React from 'react';
import classes from './Card.css';

const card = (props) => (
    <div className={classes.Card}>
        <button onClick={(index) => props.deleteCardClicked(props.id, index)}>Delete</button>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.id}</p>
    </div>
);

export default card;