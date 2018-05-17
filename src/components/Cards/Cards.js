import React from 'react';
//import classes from './Cards.css';

import Card from './Card/Card';

const cards = (props) => props.cards.map((card, index) => {
    return <Card
        id={card.id}
        title={card.title}
        description={card.description}
        key={card.id}
        deleteCardClicked={props.deleteCardClicked} />
});


export default cards;