import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';
import './styles/NavigationFormStyle.css';
import './styles/ActionsButtonsStyle.css';
import './styles/InputTextStyle.css';

const inputs = [
  {
    "id": "nome",
    "title": "Sobre a criança",
    "subtitle": "Nome completo",
    "hint": "Informe o nome completo da criança",
    "placeholder": "Digite aqui"
  }, {
    "id": "input2",
    "title": "Input 2",
    "subtitle": "Input 2",
    "hint": "Input 2",
    "placeholder": "Digite aqui"
  }, {
    "id": "input3",
    "title": "Input 3",
    "subtitle": "Input 3",
    "hint": "Input 3",
    "placeholder": "Digite aqui"
  }, {
    "id": "input4",
    "title": "Input 4",
    "subtitle": "Input 4",
    "hint": "Input 4",
    "placeholder": "Digite aqui"
  },


];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="half">
          <ul>
            <li> <h2>Escolha uma requisição</h2> </li>
            <li> <Link to="/sobre" className="HomeLinks">Atendimento a criança</Link> </li>
            <li> <Link to="/sobre" className="HomeLinks">Materiais / Produtos</Link> </li>
          </ul>
        </div>
        <div id="imagem" className="half">
        </div>
      </div>
    );
  }
}

export default App;
