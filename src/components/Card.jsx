import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      // cardID,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <>
        <p data-testid="name-card">
          {cardName}
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        <span>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </span>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  cardAttr2: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  cardAttr3: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
