import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoAmal from './../images/logo.png';
import ImagemCrianca from './../images/Crianca.png';

import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';

import LoginValidate from './../components/LoginValidate';

class Inicial extends LoginValidate {

  render() {
    return (
    <div className="App">
        <div className="half">
          <ul className="MenuCentral">
            <li><span id="LogoAmal" style={{ backgroundImage: `url(${LogoAmal})` } }></span></li>
            <li> <h2>Escolha uma requisição</h2> </li>
            <li> <Link to="/SobreCrianca" className="HomeButton">Atendimento a criança</Link> </li>
            <li> <Link to="/FormularioMateriais" className="HomeButton">Materiais / Produtos</Link> </li>
            <li> <Link to="/FormularioProfissional" className="HomeButton">Profissionais</Link> </li>
            <li> <Link to="/ApprovalScreen" className="HomeButton">Aprovação</Link> </li>
            <li> <Link to="/MinhasSolicitacoes" className="HomeButton">Solicitações</Link> </li>
          </ul>
        </div>
        <div id="imagem" className="half" style={{ backgroundImage: `url(${ImagemCrianca})` } }>
        </div>
    </div>
    );
  }
}

export default Inicial;