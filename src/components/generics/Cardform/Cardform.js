import React from 'react';
import classes from './Cardform.css';

const cardform = (props) => {
    let options = props.columns;
    options = options.map(option => {
        return <option value={option.name} key={option.id} optionid={option.id}>{option.name}</option>
    });
    let selectedOption,
        id,
        title,
        description;
    if (props.columns.length > 0) {
        selectedOption = props.columns[0].id
    } else {
        selectedOption = 0;
    }
    if (props.cardToEdit !== undefined && props.cardToEdit !== null) {
        console.log(props.cardToEdit);
        if (props.cardToEdit.card !== undefined && props.cardToEdit.card !== null) {
            id = props.cardToEdit.card.id;
            title = props.cardToEdit.card.title;
            description = props.cardToEdit.card.description;
            selectedOption = props.cardToEdit.columnIndex;
        } else {
            id = null;
            selectedOption = props.cardToEdit.columnIndex;
        }
    } else {
        id = null;
    }
    const onChangeHandler = (event) => {
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
                <input
                    id="card-title"
                    type="text"
                    className={classes.titleInput}
                    placeholder="Title"
                    onChange={(event) => onChangeHandler(event)}
                    defaultValue={title}
                    autoFocus >
                </input>
                <input
                    id="card-description"
                    type="text"
                    className={classes.descInput}
                    placeholder="Description"
                    onChange={(event) => onChangeHandler(event)}
                    defaultValue={description} >
                </input>
                <div className={classes.center}>
                    <select id="column-selector" className={classes.columnSelector} onChange={(event) => onChangeHandler(event)} style={props.cardToEdit ? { "display": "none" } : {}}>
                        {options}
                    </select>
                    <button onClick={() => props.saveClicked(id, title, description, selectedOption)}>Save</button>
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