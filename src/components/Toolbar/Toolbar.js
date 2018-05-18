import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.toolbarLeft}>
            <button className={classes.selectBoardBbutton}>Menu</button>
            <button className={classes.addNewColumnButton} onClick={() => props.newColumnGenericClicked("Column")} >Add New Column</button>
        </div>

        <img className={classes.logo} alt="logo of the project" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2vkyldAFInyfe8TlfWZvwisxi_7oTRfj5eex8GpbX0_U4viCgQ" />

        <div className={classes.toolbarRight}>
            <button onClick={() => props.newCardGenericClicked("Card")}>Add New Card</button>
        </div>
    </div>
);

export default toolbar;