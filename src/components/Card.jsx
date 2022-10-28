import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
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
      <section>
        <h2 data-testid="name-card">
          {cardName}
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <div>
          <ul>
            <li data-testid="attr1-card">{ cardAttr1 }</li>
            <li data-testid="attr2-card">{ cardAttr2 }</li>
            <li data-testid="attr3-card">{ cardAttr3 }</li>
          </ul>
          <span data-testid="rare-card">{ cardRare }</span>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
