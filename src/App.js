import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
  };

  formValidate = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const noEmptyInput = cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0;

    const sumAll = 210;
    const limitPoints = 90;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const allAttr = attr1 + attr2 + attr3 <= sumAll;
    const attrNegative = attr1 < 0
      || attr1 > limitPoints
      || attr2 < 0
      || attr2 > limitPoints
      || attr3 < 0
      || attr3 > limitPoints;

    if (!noEmptyInput && allAttr && !attrNegative) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.formValidate);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const saveNewCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      saveCards: [...prevState.saveCards, saveNewCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    }));
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      saveCards,
    } = this.state;
    return (
      <main>
        <div>
          <h1>Tryunfo</h1>
          <h2>ADICIONE NOVA CARTA</h2>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <div className="preview-card">
            <h3>Preview da Carta</h3>
            <Card { ...this.state } />
          </div>
          <div>
            {saveCards.map((saveNewCard) => (
              <div key={ saveNewCard.cardName }>
                <Card
                  cardName={ saveNewCard.cardName }
                  cardDescription={ saveNewCard.cardDescription }
                  cardAttr1={ saveNewCard.cardAttr1 }
                  cardAttr2={ saveNewCard.cardAttr2 }
                  cardAttr3={ saveNewCard.cardAttr3 }
                  cardImage={ saveNewCard.cardImage }
                  cardRare={ saveNewCard.cardRare }
                  cardTrunfo={ saveNewCard.cardTrunfo }
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
