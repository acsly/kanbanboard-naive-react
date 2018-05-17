import React from 'react';
import classes from './Column.css';

const column = (props) => (
    <div className={classes.Column}>
        <p>{props.name}</p>
    </div>
);

export default column;