import React from 'react';
import classes from './Board.css';

import Columns from '../Columns/Columns';

const board = (props) => (
    <div className={classes.Board}>
        <Columns
            columns={props.columns}
            newCardClicked={props.newCardClicked} />
    </div>
);

export default board;