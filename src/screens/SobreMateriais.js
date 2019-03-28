import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/ActionsButtonsStyle.css';


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Página de Sobre</h1>
        </header>
        <div className="SobreBody">
          <p className="App-intro">
            <span> <Link to="/FormularioCrianca" className="ActionsButtonsPrimary">Sim</Link> </span>
            <span> <Link to="/" className="ActionsButtonsPrimary">Não</Link> </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Sobre;