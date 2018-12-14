import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [{text: 'u go grl', emoji: 'happy-emoji'},
      {text: 'you can do itttt', emoji: 'cat-emoji'}],
    };
  }
  //
  // addCard = (newCard) => {
  //   const cards = {name: 'Michelle', emoji: 'happy-emoji'},
  // {name: 'Stella', emoji: 'cat-emoji'}
  //
  //   cards.push(newCard);
  //   this.setState({cards: cards})
  // }

  // collectCards = () => {
  //   const cardsToAdd =
  //
  //   cardsToAdd.forEach((card) => {
  //     let cards = this.state.cards;
  //
  //     cards.push(card);
  //   });
  //   this.setState({cards: cardsToAdd})
  //
  // }


  render() {
    console.log(this.state.cards)

    const cards = this.state.cards

    const cardCollection = cards.map((card, i) => {
      return <Card
        key={i}
        id={i}
        text = {card.text}
        emoji = {card.emoji}
        />
    });


    return (
      <div>
        <p>{cardCollection}</p>
        </div>
      )
    }
}


  // Board.propTypes = {
  //
  // };

  export default Board;
