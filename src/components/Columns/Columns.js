import React from 'react';
//import classes from './Columns.css';

import Column from './Column/Column';

const columns = (props) => props.columns.map((column, index) => {
    return <Column
        name={column.name}
        key={column.id}
        cards={column.cards} 
        newCardClicked={() => props.newCardClicked(index)}/>
});


export default columns;