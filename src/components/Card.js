import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  };


  render() {

    console.log(this.props.card.id)
    let id = this.props.card.id;
    console.log(id)
    let text = this.props.card.text;
    let emoji = this.props.card.emoji;


    return (
      <div className="card" key={id}>
        <p >Text: "{text}"</p>
        <p>Emoji: {emoji}</p>
      </div>
    )
  }
}
//
// Card.propTypes = {
//
// };

export default Card;
