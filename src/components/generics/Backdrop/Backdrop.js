import React from 'react';
import classes from './Backdrop.css';
const backdrop = (props) => {
    if (props.display) {
        return (<div className={classes.Backdrop}></div>);
    }
    return null;
};

export default backdrop;