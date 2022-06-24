import PropTypes from 'prop-types';
import React from "react";
import UserCard from './UserCard';
import './UserCards.css';

function UserCards({userCards, removeCard}){

  function onRemoveCard(id){
    const filteredUserCards = userCards.filter(card => card.id !== id);
    removeCard(filteredUserCards);
  }

const dataComponent = Array.isArray(userCards)? userCards.map((user) =>(
    <li key={user.id}>
    <UserCard id= {user.id} Name={user.name} Company={user.company} Image={user.avatar_url} Remove= {onRemoveCard}/>
    </li>)) : '';


return(
 <ul>  
   {dataComponent} 
</ul>);

}

UserCard.prototypes = {
  userCards: PropTypes.array,
  removeCard: PropTypes.func,
};

export default UserCards;