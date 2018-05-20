import React from 'react';

import Card from './Card/Card';

const cards = (props) => props.cards.map((card, index) => {
    return <Card
        id={card.id}
        title={card.title}
        description={card.description}
        labels={card.labels}
        key={card.id}
        deleteCardClicked={props.deleteCardClicked}
        editCardClicked={props.editCardClicked}
        removeLabelClicked={props.removeLabelClicked.bind(this, index)}
        drag={props.drag} />
});


export default cards;