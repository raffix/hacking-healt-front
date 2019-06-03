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
import {SolicitacoesAprovacaoService} from '../services/SolicitacoesAprovacaoService';
import {Date} from '../helpers/Date'

const storage = localStorage

const inputs = [
  {
    "id": "id_especialidade",
    "title": "Especialidade profissional*",
    "subtitle": "Selecione a especialidade desejada",
    "type": "checkbox",
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
    "title": "Tipo de ação*",
    "subtitle": "Qual a atividade que o profissional deve desempenhar",
    "type": "checkbox",
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
  },
  {
      "id": "descricao",
      "title": "Justificar necessidade*",
      "subtitle": "Descrever detalhadamente a necessidade deste profissional bem como se tem alguém em mente e se tiver respectivos custos",
      "hint": "",
      "placeholder": "Justificativa da necessidade",
      "type": "textarea"
  },
  {
    "id": "data_inicial_periodo_necessidade",
    "title": "Período da necessidade*",
    "subtitle": "Digite a data inicial do período de necessidade do profissional",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "data"
  },
  {
    "id": "data_final_periodo_necessidade",
    "title": "Período da necessidade*",
    "subtitle": "Digite a data final do período de necessidade do profissional",
    "hint": "",
    "placeholder": "Digite aqui",
    "type": "data"
  },
  {
    "id": "custo_estimado",
    "title": "Custo estimado",
    "subtitle": "Informe o custo estimado",
    "hint": "",
    "placeholder": "Ex: 5500,50",
    "type": "numerical"
  },
  {
    "id": "justificativa_valor",
    "title": "Justificativa do valor",
    "subtitle": "",
    "hint": "",
    "placeholder": "Justificar o valor",
    "type": "textarea"
  },
];


class FormularioProfissional extends Component {

  state = {inputs: inputs}

  constructor(props) {
    super(props);
    this.setAllData();
    this.setDataForm();
  }

  async setAllData(){
    let especialidades = []
    let acoes = []
    let especialidadesStorage = []
    let acoesStorage = []
   
    if (this.props.match.params.hasOwnProperty('id') && this.props.match.params.id > 0) {

      let service = new SolicitacoesAprovacaoService();
      service.getById(this.props.match.params.id)
      .then(res => res.json())
      .then(result => {

        this.setState({
            descricao: result.descricao,
            data_inicial_periodo_necessidade: Date.isoTODatePtBr(result.SolicitacaoProfissional.data_inicial_periodo_necessidade),
            data_final_periodo_necessidade: Date.isoTODatePtBr(result.SolicitacaoProfissional.data_final_periodo_necessidade),
            custo_estimado: result.SolicitacaoProfissional.custo_estimado,
            justificativa_valor: result.SolicitacaoProfissional.justificativa_valor,
            outra_acao: result.SolicitacaoProfissional.outra_acao,
            outra_especialidade: result.SolicitacaoProfissional.outra_especialidade
          })

          storage.setItem('descricao', result.descricao)
          storage.setItem('data_inicial_periodo_necessidade', Date.isoTODatePtBr(result.SolicitacaoProfissional.data_inicial_periodo_necessidade))
          storage.setItem('data_final_periodo_necessidade', Date.isoTODatePtBr(result.SolicitacaoProfissional.data_final_periodo_necessidade))
          storage.setItem('custo_estimado', result.SolicitacaoProfissional.custo_estimado)
          storage.setItem('justificativa_valor', result.SolicitacaoProfissional.justificativa_valor)
          storage.setItem('outra_acao', result.SolicitacaoProfissional.outra_acao)
          storage.setItem('outra_especialidade', result.SolicitacaoProfissional.outra_especialidade)
          storage.setItem('id', this.props.match.params.id)


          if (result.StatusAtualSolicitacaos[0].id_status > 1 || (result.StatusAtualSolicitacaos[0].id_status == 1 && result.StatusAtualSolicitacaos[0].concluido == 1)) {
            this.setState({exibir_actions: false})
          }

          result.SolicitacaoProfissional.EspecialidadeProfissionals.map(d => {
            if (d.id != 1) {
              especialidades.push(<li>{d.descricao}</li>)
            } else {
              especialidades.push(<li>{result.SolicitacaoProfissional.outra_especialidade}</li>)
            }
            especialidadesStorage.push(d.id)
          })

          this.setState({especialidade: especialidades})

          result.SolicitacaoProfissional.TipoDeAcaoProfissionals.map(d => {
            if (d.id != 1) {
              acoes.push(<li>{d.descricao_tipo_}</li>)
            } else {
              acoes.push(<li>{result.SolicitacaoProfissional.outra_acao}</li>)
            }
            acoesStorage.push(d.id)
          })

          storage.setItem('id_especialidade', especialidadesStorage)
          storage.setItem('id_tipo_acao', acoesStorage)

          this.setState({acoes: acoes})

          if (storage.getItem('reload') == 1) {
            storage.setItem('reload', 0)
            window.location.reload()
          }
      })

    } else if (this.props.location.search == '?clear=1') {
      this.state.inputs.map(i => {
        storage.removeItem(i.id)
      })

      storage.removeItem('id')
    }
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
      inputs[2].options = tiposDeAcoes
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
      inputs[0].options = especialidadesProfissionais
      this.setState({inputs: inputs})
    })
  }

  submit() {
    if (storage.getItem('id') > 0) {
      window.location.href = '/FormularioProfissionalPreview/'+storage.getItem('id')
    } else {
      window.location.href = '/FormularioProfissionalPreview'
    }
  }

  render() {
    return (

      <div className="App">
        <div className="breadcrumbs">
          <Link className="linkBreadCrumb" to="/Inicial">Home</Link> /
          <a>Requisição profissional</a>
        </div>
        <FormTitleComponent title={'Requisição profissional'} />
        <NavigationFormComponent submit={this.submit} inputs={this.state.inputs} />
      </div>
    );
  }

  componentDidMount() {

  }
}

export default FormularioProfissional;
