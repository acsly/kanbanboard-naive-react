import React from 'react';

import Label from './Label/Label';

const labels = (props) => props.labels.map((label, index) => {
    return <Label
        id={label.id}
        name={label.name}
        color={label.color}
        key={label.id}
        deleteLabelClicked={props.deleteLabelClicked} />
});

export default labels;