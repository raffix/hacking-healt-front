import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import './../styles/LoginStyle.css';
import {AppSettings} from '../app.settings';

class Login extends Component {
  

  constructor(props) {
    super(props);
    let token = window.localStorage.getItem('token');
    this.redirect = false;
    console.log(token)
    if(token !== null && token !== '')
      window.location = '/Inicial';
  }

  sendLogin() {
    let header = {
      'Content-Type': 'application/json'
    }
  
    let options = {
      method: 'POST',
      body: JSON.stringify({
        login: document.getElementById('login').value,
        senha: document.getElementById('senha').value
      }),
      headers: header
    };
    

    fetch(AppSettings.BASE_URL + "/login", options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if(result.error === undefined) {
            window.localStorage.setItem('token', result.token)            
            document.getElementById('linkInicial').click();
          } else {
            alert("Login ou senha inválidos");
          }          
        },
        (error) => {
          alert("Erro! Contate o Administrador");
          console.log(error)
        }
      )
  }

  recoveryPassword() {
    console.log('Funcionalidade ainda não implementada');
  }



  render() {
    return (
        <div className="ContainerLogin">
          <div className="InputText">
            <label className="LabelInputText">
              <span>Usuário</span>
              <input type="text" name="login" id="login" placeholder="Usuário" />
            </label>                
          </div>
          <div className="InputText">
            <label className="LabelInputText">
              <span>Senha</span>
              <input type="password" name="senha" id="senha" placeholder="Senha" />
            </label>                
          </div>
          <div>
            <button className="ActionsButtonsPrimary" onClick={this.sendLogin}>Entrar</button>
            <a className="ActionsButtonsLink" onClick={this.recoveryPassword}>Recuperar senha</a>
          </div>

          <Link id="linkInicial" to="/Inicial"></Link>
        </div>
    );
  }
}

export default Login;