import React, { Component } from 'react';
import LogoAmal from './images/logo.png';
import ImagemCrianca from './images/Crianca.png';
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
          <ul className="MenuCentral">
            <li><span id="LogoAmal" style={{ backgroundImage: `url(${LogoAmal})` } }></span></li>
            <li> <h2>Escolha uma requisição</h2> </li>
            <li> <Link to="/SobreCrianca" className="HomeButton">Atendimento a criança</Link> </li>
            <li> <Link to="/SobreMateriais" className="HomeButton">Materiais / Produtos</Link> </li>
          </ul>
        </div>
        <div id="imagem" className="half" style={{ backgroundImage: `url(${ImagemCrianca})` } }>
        </div>
      </div>
    );
  }
}

export default App;
