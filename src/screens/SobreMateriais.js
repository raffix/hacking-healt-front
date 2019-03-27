import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Página de Sobre</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Ir para a página home \o/</Link>
        </p>
      </div>
    );
  }
}

export default Sobre;