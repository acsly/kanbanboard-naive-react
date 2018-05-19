import React from 'react';
import classes from './Column.css';

import Cards from '../../Cards/Cards';

const column = (props) => (
    <div className={classes.Column}>

        <button className={classes.deleteBtn} onClick={() => props.deleteColumnClicked(props.id)}>X</button>
        <button className={classes.newBtn} onClick={props.newCardClicked}>+ Card</button>
        <h4>{props.name} ({props.cards.length})</h4>
        <div className={classes.headDiv}>
        </div>
        <div>
            <Cards
                cards={props.cards}
                deleteCardClicked={props.deleteCardClicked}
                editCardClicked={props.editCardClicked} />
        </div>
    </div>
);

export default column;