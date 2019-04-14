
import React, { Component } from 'react';
import LogoAmal from './images/logo.png';
import ImagemCrianca from './images/Crianca.png';
import { Link } from 'react-router-dom';

import './styles/App.css';
import './styles/NavigationFormStyle.css';
import './styles/ActionsButtonsStyle.css';
import './styles/InputTextStyle.css';
import Login from './screens/Login';

class Inicial extends Component {

  render() {
    return (
    <div>
        <div className="half">
          <ul className="MenuCentral">
            <li><span id="LogoAmal" style={{ backgroundImage: `url(${LogoAmal})` } }></span></li>
            <li> <h2>Escolha uma requisição</h2> </li>
            <li> <Link to="/SobreCrianca" className="HomeButton">Atendimento a criança</Link> </li>
            <li> <Link to="/FormularioMateriais" className="HomeButton">Materiais / Produtos</Link> </li>
            <li> <Link to="/FormularioProfissional" className="HomeButton">Profissionais</Link> </li>
            <li> <Link to="/ApprovalScreen" className="HomeButton">Aprovação</Link> </li>

          </ul>
        </div>
        <div id="imagem" className="half" style={{ backgroundImage: `url(${ImagemCrianca})` } }>
        </div>
    </div>
    );
  }
}

export default Inicial;