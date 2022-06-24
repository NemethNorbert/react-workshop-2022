import './App.css';
import CardList from './CardList.js';
import ErrorBoundary from './ErrorBoundary.js';
import Form from './Form.js';
import {useState} from 'react';

const App = () => {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <ErrorBoundary>
        <Form onSubmit={addNewCard} />
        <CardList cards={cards} />
      </ErrorBoundary>
    </div>
  )
}

export default App;