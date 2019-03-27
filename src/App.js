import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';
import './styles/NavigationFormStyle.css';
import './styles/ActionsButtonsStyle.css';
import './styles/InputTextStyle.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="half">
          <ul>
            <li> <h2>Escolha uma requisição</h2> </li>
            <li> <Link to="/SobreCrianca" className="HomeLinks">Atendimento a criança</Link> </li>
            <li> <Link to="/SobreMateriais" className="HomeLinks">Materiais / Produtos</Link> </li>
          </ul>
        </div>
        <div id="imagem" className="half">
        </div>
      </div>
    );
  }
}

export default App;
