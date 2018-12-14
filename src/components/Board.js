import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.emojiLibrary = require('emoji-dictionary');


    this.state = {
      cards: [],
    };
  }

  emojify = (emojiTextName) => {
    let validEmojiCheck = this.emojiLibrary.names.includes(emojiTextName)
    return validEmojiCheck ? this.emojiLibrary.getUnicode(emojiTextName) : emojiTextName
  }

  componentDidMount() {
    const GET_CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/mightymichelle/cards';

    axios.get(GET_CARDS_URL)
    .then((response) => {
      this.setState({
        cards: response.data
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
    //
    //
    //
    // this.setState({
    //   cards: fetchCardData()
    // });
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
    const cards = this.state.cards

    const cardCollection = cards.map((card, i) => {

      let formattedCard = {
        key: i,
        id: i,
        text: card.text,
        emoji: this.emojify(card.emoji)
        }

      return <Card key={card.id}
                  card={formattedCard} />


    });


    return (
      <div>
        <p>{cardCollection}</p>
        </div>
      )
    }
}

// const fetchCardData = () => {
//   return [{text: 'u go grl', emoji: 'heart_eyes'},
//   {text: 'you can do itttt', emoji: 'grinning'}]
// }


  // Board.propTypes = {
  //
  // };

  export default Board;
