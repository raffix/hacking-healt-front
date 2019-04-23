import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import './../styles/LoginStyle.css';

const solicitacoes = [
  {
    'id': 1,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '01/04/2019',
  },
  {
    'id': 1,
    'nome': 'João Silva',
    'tipo': 'Criança',
    'status': 'Avaliação',
    'data': '10/04/2019',
  },
  {
    'id': 1,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '01/04/2019',
  },
  {
    'id': 1,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '01/04/2019',
  },
]

class Login extends Component {
  

  render() {
    return (
        <div className="ContainerSolicitacoes">
          
        </div>
    );
  }
}

export default Login;