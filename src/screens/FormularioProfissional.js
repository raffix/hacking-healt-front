import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import NavigationFormComponent from './../components/NavigationFormComponent';

const inputs = [
  {
    "id": "instituicao",
    "title": "Instituição",
    "subtitle": "Informe a instituição",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  }, 
  {
    "id": "especialidade",
    "title": "Especialidade",
    "subtitle": "Selcione a especialidade desejada",    
    "type": "select",
    "options": [
      {"value": 1, "description": "ESPECIALIDADE 1"},
      {"value": 2, "description": "ESPECIALIDADE 2"},
      {"value": 3, "description": "ESPECIALIDADE 3"},          
      {"value": 4, "description": "ESPECIALIDADE 4"},
    ],
  },  {
    "id": "quantidade",
    "title": "Quantidade",
    "subtitle": "Quantidade de profissionais",    
    "placeholder": "Digite aqui",
    "type": "text"
  }, {
    "id": "valor_estimado",
    "title": "Valor estimado",
    "subtitle": "Informe o valor estimado",    
    "placeholder": "Digite aqui",
    "type": "text"
  }, {
    "id": "quantidade_criancas",
    "title": "Quantidade de crianças",
    "subtitle": "Quantidade de crianças que irá auxiliar",    
    "placeholder": "Digite aqui",
    "type": "text"
  }
];

class FormularioProfissional extends Component {
  render() {
    return (
      <div className="App">
        <NavigationFormComponent inputs={inputs} />
      </div>
    );
  }
}

export default FormularioProfissional;