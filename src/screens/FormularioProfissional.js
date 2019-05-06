import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import NavigationFormComponent from './../components/NavigationFormComponent';
import FormTitleComponent from './../components/FormTitleComponent';
import {TiposDeAcoesService} from '../services/TiposDeAcoesProfissionaisService';
import {EspecialidadesProfissionaisService} from '../services/EspecialidadesProfissionaisService';
import {SolicitacaoProfissionalService} from '../services/SolicitacaoProfissionalService';

const inputs = [
  {
      "id": "descricao",
      "title": "Descrição",
      "subtitle": "",
      "hint": "",
      "placeholder": "Descrição da solicitação",
      "type": "text"
  },
  {
    "id": "id_especialidade",
    "title": "Especialidade profissional",
    "subtitle": "Selecione a especialidade desejada",    
    "type": "select",
    "options": [
    
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
    "id": "id_tipo_acao",
    "title": "Tipo de ação",
    "subtitle": "Selecione a atividade que o profissional deve desempenhar",    
    "type": "select",
    "options": [
     
    ],
  },
  {
    "id": "outra_acao",
    "title": "Outra Ação",
    "subtitle": "Digite a ação desempenhada",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "text"
  },{
    "id": "dt_necessidade",
    "title": "Data necessidade profissional",
    "subtitle": "Digite a data de necessidade do profissional",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "data"
  },
  {
    "id": "custo_estimado",
    "title": "Custo estimado",
    "subtitle": "Informe o custo estimado",
    "hint": "",
    "placeholder": "Ex: 5500.50",
    "type": "text"
  },       
];

class FormularioProfissional extends Component {

  state = {inputs: inputs}

  constructor(pros) {
    super(pros);

    this.setDataForm();

  }

  async setDataForm() {
    let serviceTipoAcao = new TiposDeAcoesService();
    serviceTipoAcao.getAll().then(res => res.json())
    .then((result) => {
      let tiposDeAcoes = [];

      result.map(d => {
        tiposDeAcoes.push({value: d.id, description: d.descricao_tipo_acao});
      })
        
      let inputs = this.state.inputs;
      inputs[3].options = tiposDeAcoes
      this.setState({inputs: inputs})
    })

    let serviceEspecialidadesProfissionais = new EspecialidadesProfissionaisService();

    serviceEspecialidadesProfissionais.getAll().then(res => res.json())
    .then((result) => {
      let especialidadesProfissionais = [];

      result.map(d => {
        especialidadesProfissionais.push({value: d.id, description: d.descricao});
      })
        
      let inputs = this.state.inputs;
      inputs[1].options = especialidadesProfissionais
      this.setState({inputs: inputs})
    })
  }

  submit() {
    let storage = localStorage
    let data = {}
    this.inputs.map(d => {
        data[d.id] = storage.getItem(d.id)
    }) 

    let service = new SolicitacaoProfissionalService();
    service.save(data).then(res => res.json())
    .then((result) => {
      alert("Solicitação salva com sucesso");
      this.inputs.map(d => {
        storage.removeItem(d.id)
      }) 
      window.location = '/Inicial';
    }, (error) => {
      alert("Erro! Contate o Administrador");
      console.log(error)
    })

    console.log(data);
  }

  render() {
    return (
      
      <div className="App">
        <Link className="linkHome" to="/Inicial">Home</Link>  
        <FormTitleComponent title={'Formulário Profissional'} />
        <NavigationFormComponent submit={this.submit} inputs={inputs} />
      </div>
    );
  }
}

export default FormularioProfissional;