import React from 'react';
import Card from './Card';

export default function CardList (props) {
    return (
        <div>{props.cards.map(card => <Card {...card} />)}</div>
    )
  };