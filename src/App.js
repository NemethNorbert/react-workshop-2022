import './App.css';
import { useState } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';

const App = () => {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;