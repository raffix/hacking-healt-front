import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';

import NavigationFormComponent from './../components/NavigationFormComponent';
import FormTitleComponent from './../components/FormTitleComponent';
import LoginValidate from './../components/LoginValidate';

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
    "id": "material",
    "title": "Material",
    "subtitle": "Escolha um material",    
    "type": "select",
    "options": [
      {"value": 1, "description": "MATERIAL 1"},
      {"value": 2, "description": "MATERIAL 2"},
      {"value": 3, "description": "MATERIAL 3"},          
      {"value": 4, "description": "MATERIAL 4"},
    ],
  }, {
    "id": "quantidade",
    "title": "Quantidade",
    "subtitle": "Informe a quantidade",    
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

class FormularioMateriais extends LoginValidate {
  render() {
    return (
      <div className="App">
        <FormTitleComponent title={'Formulário Materiais'} />
        <NavigationFormComponent inputs={inputs} />
      </div>
    );
  }
}

export default FormularioMateriais;