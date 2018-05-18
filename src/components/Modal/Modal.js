import React from 'react';
import classes from './Modal.css';

const modal = (props) => {
    if (props.display) {
        return (
            <div className={classes.Modal}>
                {props.children}
            </div>
        );
    }else {
        return null;
    }

};

export default modal;