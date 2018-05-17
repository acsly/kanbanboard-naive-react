import React from 'react';
import classes from './Board.css';

const board = (props) => (
    <div className={classes.Board}>
        <div>{props.board.columns[0].name}</div>
        <div>{props.board.columns[1].name}</div>
        <div>{props.board.columns[2].name}</div>
    </div>
);

export default board;