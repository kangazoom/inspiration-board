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

    this.emojiLibrary = require('emoji-dictionary');

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({
      cards: fetchCardData()
    });
  }

  emojify = (emojiTextName) => {
    return this.emojiLibrary.getUnicode(emojiTextName);
  }

  // addCard = (newCard) => {
  //   const cards = this.state.cards;
  //
  //   cards.push(newCard)
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
        emoji = {this.emojify(card.emoji)}
        />
    });


    return (
      <div>
        <p>{cardCollection}</p>
        </div>
      )
    }
}

const fetchCardData = () => {
  return [{text: 'u go grl', emoji: 'heart_eyes'},
  {text: 'you can do itttt', emoji: 'grinning'}]
}


  // Board.propTypes = {
  //
  // };

  export default Board;
