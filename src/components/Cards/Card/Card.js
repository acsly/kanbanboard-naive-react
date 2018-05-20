import React from 'react';
import classes from './Card.css';

import Labels from '../../Labels/Labels';

const card = (props) => (
    <div className={classes.Card}>
        <button className={classes.editBtn} onClick={(index) => props.editCardClicked(props.id, index)}>Edit</button>
        <button className={classes.deleteBtn} onClick={(index) => props.deleteCardClicked(props.id, index)}>X</button>
        <div className={classes.cardContent}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <Labels
                labels={props.labels}
                removeLabelClicked={props.removeLabelClicked} />
        </div>
    </div>
);

export default card;