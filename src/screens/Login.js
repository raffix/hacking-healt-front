import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import NavigationFormComponent from './../components/NavigationFormComponent';
import FormTitleComponent from './../components/FormTitleComponent';

const inputs = [
  {
    "id": "login",
    "title": "Login",
    "subtitle": "",
    "hint": "",
    "placeholder": "",
    "type": "text"
  }, 
  {
    "id": "senha",
    "title": "Senha",
    "subtitle": "Informe a sua senha",
    "placeholder": "",
    "type": "password"
  }
];

class Login extends Component {
  render() {
    return (
      <div className="App">
        <FormTitleComponent title={'Login'} />
        <NavigationFormComponent inputs={inputs} />
      </div>
    );
  }
}

export default Login;