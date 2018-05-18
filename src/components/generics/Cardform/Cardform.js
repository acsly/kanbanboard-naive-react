import React from 'react';
import classes from './Cardform.css';

const cardform = (props) => {
    let options = props.columns;
    options = options.map(option => {
        return <option value={option.name} key={option.id} optionid={option.id}>{option.name}</option>
    });
    let selectedOption = props.columns[0].id,
        title,
        description,
        onChangeHandler = (event) => {
            if (event.target.id === "card-title") {
                title = event.target.value;
            } else if (event.target.id === "card-description") {
                description = event.target.value;
            } else if (event.target.id === "column-selector") {
                selectedOption = event.target.options[event.target.options.selectedIndex].getAttribute("optionid");
            }
        };

    let form = (
        <div className={classes.Cardform}>
            <button onClick={() => props.cancelClicked("Cancel")}>cancel</button>
            <input id="card-title" placeholder="Title" onChange={(event) => onChangeHandler(event)}></input>
            <input id="card-description" placeholder="Description" onChange={(event) => onChangeHandler(event)} ></input>
            <select id="column-selector" onChange={(event) => onChangeHandler(event)} >
                {options}
            </select>
            <button onClick={() => props.saveClicked(title, description, selectedOption)}>Save</button>
        </div>
    );

    if (props.display) {
        return form;
    }
    return null;
};

export default cardform;