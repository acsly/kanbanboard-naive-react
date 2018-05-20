import React from 'react';
//import classes from './Columns.css';

import Column from './Column/Column';

const columns = (props) => props.columns.map((column, index) => {
    return <Column
        id={column.id}
        name={column.name}
        key={column.id}
        cards={column.cards}
        newCardClicked={() => props.newCardClicked(index)}
        editCardClicked={props.editCardClicked.bind(this, index)}
        deleteCardClicked={props.deleteCardClicked.bind(this, index)}
        deleteColumnClicked={props.deleteColumnClicked}
        removeLabelClicked={props.removeLabelClicked.bind(this, index)} />
});


export default columns;