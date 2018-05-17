import React from 'react';
import classes from './Column.css';

import Cards from '../../Cards/Cards';

const column = (props) => (
    <div className={classes.Column}>
        <header>
            <h4>{props.name}</h4>
            <button onClick={props.newCardClicked}>new</button>
        </header>
        <div>
            <Cards cards={props.cards}/>
        </div>
    </div>
);

export default column;