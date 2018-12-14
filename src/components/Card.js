import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

  };


  render() {

    let text = this.props.text;
    let emoji = this.props.emoji;

    return (
      <div className="card">
        <p>Text: "{text}"</p>
        <p>Emoji: {emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
