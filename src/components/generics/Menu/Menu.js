import React from 'react';
import classes from './Menu.css';

const menu = (props) => {
    if (props.display) {
        return (
            <div className={classes.Menu}>
                <button className={classes.cancelBtn} onClick={() => props.cancelClicked("Cancel")}>X</button>
                <div>
                    <button className={classes.downloadBtn} onClick={props.downloadClicked}>Download Board Data</button>
                </div>
                <div>
                    <button className={classes.loadBtn}>Load Board Data From File</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default menu;