import React from 'react';
import classes from './Upload.css';

const upload = (props) => {

    let fileReader = new FileReader(),
        file = null,
        content = null,
        onChangeHandler = (event) => {
            file = event.target.files[0];
            fileReader.onload = () => {
                content = fileReader.result;
            }
            fileReader.readAsText(file);
        };



    if (props.display) {
        return (
            <div className={classes.Upload}>
                <button className={classes.cancelBtn} onClick={() => props.cancelClicked("Cancel")}>X</button>
                <div className={classes.uploadContainer}>
                    <input type="file" accept=".json" onChange={(event) => onChangeHandler(event)}></input>
                    <button className={classes.loadBtn} onClick={() => props.loadClicked(content)}>Load</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default upload;