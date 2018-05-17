import React from 'react';
//import classes from './Cards.css';

import Card from './Card/Card';

const cards = (props) => props.cards.map((card, index) => {
    return <Card title={card.title} description={card.description} key={card.id} />
});


export default cards;