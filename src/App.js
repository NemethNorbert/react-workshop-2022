import './App.css';
import { useState } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback';

const App = () => {
  const [cards, setCards] = useState([])

  const removeCard = cardInfo => {
    const newCardList = cards.filter(card => card.id != cardInfo.id)
      setCards(newCardList)
  }

  const addNewCard = cardInfo => {
    if(!cards.find(card => card.id === cardInfo.id))
      setCards(cards.concat(cardInfo))
  }

  return (
    <div className='container'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form onSubmit={addNewCard} />
      </ErrorBoundary>
      <CardList cards={cards} removeCard={removeCard} />
    </div>
  )
}

export default App;
