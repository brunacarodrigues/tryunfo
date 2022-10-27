import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card />
        <Form />
      </div>
    );
  }
}

export default App;
