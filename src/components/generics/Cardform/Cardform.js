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
            <button className={classes.cancelBtn} onClick={() => props.cancelClicked("Cancel")}>X</button>
            <div>
                <input id="card-title" className={classes.titleInput} placeholder="Title" onChange={(event) => onChangeHandler(event)} autoFocus></input>
                <input id="card-description" className={classes.descInput} placeholder="Description" onChange={(event) => onChangeHandler(event)} ></input>
                <div className={classes.center}>
                    <select id="column-selector" className={classes.columnSelector} onChange={(event) => onChangeHandler(event)} >
                        {options}
                    </select>
                    <button onClick={() => props.saveClicked(title, description, selectedOption)}>Save</button>
                </div>
            </div>
        </div>
    );

    if (props.display) {
        return form;
    }
    return null;
};

export default cardform;