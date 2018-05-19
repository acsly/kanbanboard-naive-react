import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.toolbarLeft}>
            <button className={classes.selectBoardBbutton}>Menu</button>
            <button className={classes.addNewColumnButton} onClick={() => props.newColumnGenericClicked("Column")} >Add New Column</button>
        </div>

        <h2 className={classes.logo}>Kanban Board</h2>

        <div className={classes.toolbarRight}>
            <button onClick={() => props.newCardGenericClicked("Card")}>Add New Card</button>
        </div>
    </div>
);

export default toolbar;