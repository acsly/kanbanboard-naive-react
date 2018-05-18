import React from 'react';
import classes from './Columnform.css';

const columnform = (props) => {
    let name,
        onChangeHandler = (event) => {
            name = event.target.value;
        };

    let form = (
        <div className={classes.Columnform}>
            <button className={classes.cancelBtn} onClick={() => props.cancelClicked("Cancel")}>X</button>
            <input className={classes.nameInput} placeholder="Name" onChange={(event) => onChangeHandler(event)} autoFocus></input>
            <div className={classes.center}>
                <button onClick={() => props.saveClicked(name)}>Save</button>
            </div>
        </div>
    );

    if (props.display) {
        return form;
    }
    return null;
};

export default columnform;