import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import './../styles/LoginStyle.css';
import FormTitleComponent from './../components/FormTitleComponent';

class Login extends Component {
  sendLogin() {
    console.log('sendlogin');
    document.getElementById('linkInicial').click();
  }

  recoveryPassword() {
    console.log('recovery password');
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default Login;