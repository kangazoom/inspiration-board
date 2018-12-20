import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  };


  onDeleteHander = (event) => {
    console.log(this.props.card.id)

    // event.preventDefault();
    this.props.card.deleteCardCB(this.props.card.id)
  }

  render() {

    let id = this.props.card.id;
    let text = this.props.card.text;
    let emoji = this.props.card.emoji;


    return (
      <div className="card" key={id}>
        <p >Text: "{text}"</p>
        <p>Emoji: {emoji}</p>
        <button onClick={this.onDeleteHander}>Delete</button>
      </div>
    )
  }
}
//
// Card.propTypes = {
//
// };

export default Card;
