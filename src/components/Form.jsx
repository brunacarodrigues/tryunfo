import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="name-card">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="type-card">
          Descrição
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr01-card">
          Attr01
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr02-card">
          Attr02
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr03-card">
          Attr03
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="img-card">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="raro-card">
          Raridade
          <select type="select" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-card">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button" disabled>Salvar</button>
      </>
    );
  }
}

export default Form;
