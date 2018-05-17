import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <button className={classes.selectBoardBbutton}>Menu</button>
        <button onClick={props.newColumnClicked} className={classes.addNewColumnBbutton}>Add New Column</button>
        <img className={classes.logo} alt="logo of the project" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2vkyldAFInyfe8TlfWZvwisxi_7oTRfj5eex8GpbX0_U4viCgQ"/>
    </div>
);

export default toolbar;