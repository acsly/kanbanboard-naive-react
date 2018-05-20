import React from 'react';
import classes from './Board.css';

import Columns from '../Columns/Columns';

const board = (props) => (
    <div className={classes.Board}>
        <Columns
            columns={props.columns}
            newCardClicked={props.newCardClicked}
            editCardClicked={props.editCardClicked}
            deleteCardClicked={props.deleteCardClicked}
            deleteColumnClicked={props.deleteColumnClicked}
            removeLabelClicked={props.removeLabelClicked} />
    </div>
);

export default board;