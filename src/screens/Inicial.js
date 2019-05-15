import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoAmal from './../images/logo.png';
import ImagemCrianca from './../images/Crianca.png';

import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import {UsuarioPerfilService} from '../services/UsuarioPerfilService';

import LoginValidate from './../components/LoginValidate';

class Inicial extends LoginValidate {

  state = {perfil: {id: null, descricao: null, menu: []}}
  storage = localStorage


  constructor() {
    super();
    this.getPerfil();
  }

  async getPerfil() {
    let service = new UsuarioPerfilService();
    let result = await service.getPerfilUsuario().then(res => res.json())
    .then(
      (result) => {
        if (result.hasOwnProperty('Perfils')) {
          let perfil = result.Perfils[0];
          this.setState({perfil: perfil})
          this.storage.setItem("perfil", perfil.id)

          let menu = [];

          if (perfil.id == 2) {
            menu.push(<li key="4"> <Link to="/SobreCrianca" className="HomeButton">Atendimento a criança</Link> </li>);
            menu.push(<li key="5"> <Link to="/FormularioMateriais" className="HomeButton">Materiais / Produtos</Link> </li>);
            menu.push(<li key="6"> <Link to="/FormularioProfissional" className="HomeButton">Profissionais</Link> </li>);
            menu.push(<li key="7"> <Link to="/MinhasSolicitacoes" className="HomeButton">Solicitações</Link> </li>);
          } else if (perfil.id > 2) {
            menu.push(<li> <Link to="/ApprovalScreen" className="HomeButton">Aprovação</Link> </li>);
          } else {
            menu.push(<li key="8"> <Link to="/" className="HomeButton">Usuários</Link> </li>);
            menu.push(<li key="9"> <Link to="/" className="HomeButton">Instituições</Link> </li>);
            menu.push(<li key="10"> <Link to="/" className="HomeButton">Redes</Link> </li>);
            menu.push(<li key="11"> <Link to="/" className="HomeButton">Especialidades profissionais</Link> </li>);
            menu.push(<li key="12"> <Link to="/" className="HomeButton">Materiais</Link> </li>);
            menu.push(<li key="13"> <Link to="/" className="HomeButton">Unidades Materiais</Link> </li>);
          }

          menu.push(<li key="14"> <Link to="#" onClick={this.logout} className="HomeButton">Sair</Link> </li>)
          this.setState({menu: menu});
        }

        if (result.hasOwnProperty('auth') && result.auth === false) {
          this.storage.removeItem('token')
          window.location.href = '/'
        }

      },
      (error) => {
        console.log(error)
      }
    );
  }

  logout() {
    window.localStorage.removeItem('token');
    window.location = '/';
  }

  render() {
    return (
    <div className="App">
        <div className="half">
          <ul className="MenuCentral">
            <li key="1"><span id="LogoAmal" style={{ backgroundImage: `url(${LogoAmal})` } }></span></li>
            <li key="2"> <h2>Escolha uma opção</h2> </li>
            <li key="3"><h5>Perfil: {this.state.perfil.descricao}</h5></li>
            {this.state.menu}
          </ul>
        </div>
        <div id="imagem" className="half" style={{ backgroundImage: `url(${ImagemCrianca})` } }>
        </div>
    </div>
    );
  }
}

export default Inicial;
