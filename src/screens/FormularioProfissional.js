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
      "id": "requisitante",
      "title": "Requisitante",
      "subtitle": "",
      "hint": "",
      "placeholder": "Digite aqui",
      "type": "text"
  },
  {
      "id": "cargo",
      "title": "Cargo",
      "subtitle": "",
      "hint": "",
      "placeholder": "Digite aqui",
      "type": "text"
  },
  {
    "id": "telefone",
    "title": "Telefone",
    "subtitle": "",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },
  {
    "id": "email",
    "title": "Email",
    "subtitle": "",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },
  {
    "id": "entidade_representante",
    "title": "Entidade representante",
    "subtitle": "",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },
  {
    "id": "data_necessidade_profissional",
    "title": "Data necessidade profissional",
    "subtitle": "Digite a data de necessidade do profissional",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "data"
  },       
  {
    "id": "especialidade",
    "title": "Especialidade profissional",
    "subtitle": "Selecione a especialidade desejada",    
    "type": "select",
    "options": [
      {"value": 1, "description": "ESPECIALIDADE 1"},
      {"value": 2, "description": "ESPECIALIDADE 2"},
      {"value": 3, "description": "ESPECIALIDADE 3"},          
      {"value": 4, "description": "OUTRA"},
    ],
  },
  {
    "id": "outra_especialidade",
    "title": "Outra especialidade",
    "subtitle": "Digite a especialidade",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },
  {
    "id": "tipo_acao",
    "title": "Tipo de ação",
    "subtitle": "Selecione a atividade que o profissional deve desempenhar",    
    "type": "select",
    "options": [
      {"value": 1, "description": "CIRURGIA"},
      {"value": 2, "description": "AULA"},
      {"value": 3, "description": "PALESTRA"},          
      {"value": 4, "description": "OUTRA"},
    ],
  },
  {
    "id": "outra_acao",
    "title": "Outra Ação",
    "subtitle": "Digite a ação desempenhada",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },
  {
    "id": "justificativa_acao",
    "title": "Justificativa da Ação",
    "subtitle": "Descreva detalhadamente a necessidade deste profissional",    
    "placeholder": "Digite aqui",
    "type": "text"
  }, {
    "id": "data_envio_solicitacao",
    "title": "Data de envio da solicitação",
    "subtitle": "Data de envio para análise",    
    "placeholder": "Digite aqui",
    "type": "data"
  }
];

class FormularioProfissional extends Component {
  render() {
    return (
      <div className="App">
        <FormTitleComponent title={'Formulário Profissional'} />
        <NavigationFormComponent inputs={inputs} />
      </div>
    );
  }
}

export default FormularioProfissional;