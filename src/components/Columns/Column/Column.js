import React from 'react';
import classes from './Column.css';

import Cards from '../../Cards/Cards';

const column = (props) => (
    <div className={classes.Column}>
        <header>
            <button onClick={() => props.deleteColumnClicked(props.id)}>Delete</button>
            <h4>{props.name} ({props.cards.length})</h4>
            <button onClick={props.newCardClicked}>new</button>
        </header>
        <div>
            <Cards
                cards={props.cards}
                deleteCardClicked={props.deleteCardClicked} />
        </div>
    </div>
);

export default column;