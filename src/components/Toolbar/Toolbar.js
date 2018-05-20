import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.toolbarLeft}>
            <button className={classes.selectBoardBtn} onClick={() => props.menuClicked("Menu")}>Menu</button>
            <button className={classes.addNewColumnBtn} onClick={() => props.newColumnGenericClicked("Column")} >Add New Column</button>
        </div>
        <h2 className={classes.logo}>{props.boardName}</h2>
        <div className={classes.toolbarRight}>
            <button onClick={() => props.newCardGenericClicked("Card")} disabled={props.newCardDisabled}>Add New Card</button>
        </div>
    </div>
);

export default toolbar;