import Card from './Card.js';
import PropTypes from 'prop-types';

function CardList({cards}) {
    return (
        <div>
            {cards.map(card => <Card {...card} />)}
        </div>
    )
}

CardList.propTypes = {
    cards: PropTypes.array
};

export default CardList;