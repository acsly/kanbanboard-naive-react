import React from 'react';
import classes from './Columnform.css';

const columnform = (props) => {
    let name,
        onChangeHandler = (event) => {
            name = event.target.value;
        };

    let form = (
        <div className={classes.Columnform}>
            <button onClick={() => props.cancelClicked("Cancel")}>cancel</button>
            <input placeholder="Name" onChange={(event) => onChangeHandler(event)}></input>
            <button onClick={() => props.saveClicked(name)}>Save</button>
        </div>
    );

    if (props.display) {
        return form;
    }
    return null;
};

export default columnform;