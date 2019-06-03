import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';
import {ComiteComunitarioRegionalService} from '../../services/ComiteComunitarioRegionalService';

export default class Status2EmAprovacaoShirenerRegional extends Component {

  state = {
    comites: [],
    exibir_comites: false,
    showReivindicar: true,
    id_comite_comunitario_regional: null,
    justificativa: '',
    aprovar_requisicao: 0
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
    this.getComites()
  }

  async getComites() {
    let service = new ComiteComunitarioRegionalService()
    service.getAll().then(res => res.json()).then(result => {
      this.setState({comites: result})
    })
  }

  handleChange(event) {
      this.setState({id_comite_comunitario_regional: event.target.value})
  }

  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  reivindicar() {
    let service = new MudarStatusSolicitacaoService();
    service.update(this.props.status[0].id, {})
    .then(res => res.json()).then(result => {
      this.setState({showReivindicar: false})
      console.log(result)
    });
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao
    let id_comite_comunitario_regional = this.state.id_comite_comunitario_regional

    if (this.state.exibir_comites == true) {
    } else {
      id_comite_comunitario_regional = null
    }

    data = {
      id_solicitacao: id,
      id_status: 3,
      feedback: this.state.justificativa,
      concluido: concluido,
      id_comite_comunitario_regional: id_comite_comunitario_regional,
      aprovar_requisicao: this.state.aprovar_requisicao
    }

    console.log(data)

    if (this.props.status[0].concluido == 1) {
      let service = new MudarStatusSolicitacaoService();
      service.save(data).then(res => res.json()).then(
        result => {
          alert("Salvo com sucesso!")
          window.location = '/ApprovalScreen';
        }
      )
    } else {
      let service = new MudarStatusSolicitacaoService();
      service.update(this.props.status[0].id, data).then(res => res.json()).then(
        result => {
          alert("Salvo com sucesso!")
          window.location = '/ApprovalScreen';
        }
      )
    }
  }

  aprovaRequisicao(value) {
     if (value == 1) {
       this.setState({exibir_comites: true})
       this.setState({aprovar_requisicao: 1})
     } else {
       this.setState({exibir_comites: false})
       this.setState({aprovar_requisicao: 0})
     }
  }

  render() {
    return (
      <div>
      {
        this.props.id_status == 2 || (this.props.id_status == 3 && this.props.concluido == 0) ?
        <div>
          <div className="InputText">
              <h3>Aprova Requisição?</h3>
              <label className="LabelInputText">
                  <span></span>
                  <span></span>
                  <div className="radio-container"><input onClick={() => this.aprovaRequisicao(1)} checked={this.state.aprovar_requisicao == 1 ? true : false} type="radio" name="aprovar_requisicao" value="1" /><label>SIM</label></div>
                  <div className="radio-container"><input onClick={() => this.aprovaRequisicao(0)} checked={this.state.aprovar_requisicao == 0 ? true : false} type="radio" name="aprovar_requisicao" value="0" /><label>NÃO</label></div>
              </label>
          </div>

          <div className="InputText">
              <h3>Justificativa Resposta Aprovação</h3>
              <label className="LabelInputText">
                  <span>Justifique sua resposta</span>
                  <span></span>
                  <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa} name="justificar_resposta" id="justificar_resposta" >

                  </textarea>
              </label>
          </div>

          {
            this.state.exibir_comites == true ?
            <div className="InputText">
                <h3>Encaminhar análise e parecer do Comitê Comunitário Regional</h3>
                <label className="LabelInputText">
                    <span>Informe o Comite que dará o parecer</span>
                    <span></span>
                    <select id="comite_regional" onChange={this.handleChange} value={this.state.id_comite_comunitario_regional} className="select-container" name="comite_regional">
                      {this.state.comites.map(d => {
                        return (<option value={d.id}>{d.descricao}</option>)
                      }
                      )}
                    </select>
                </label>

            </div> : ''
          }

            {
              this.props.id_status == 2 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
              <button onClick={() => this.reivindicar()}  >
                  Reinvidicar
              </button> : ''
            }
            <button onClick={() => this.submit(0)}  >
                Salvar e Permancer
            </button>
            <button onClick={() => this.submit(1)}  >
                Salvar e Encaminhar
            </button>
          </div> : ''
          }
          </div>
        );
      }

      componentDidMount() {
        console.log(this.props.status[0])
        if (this.props.status[0].id_status == 3) {
          this.setState({id_comite_comunitario_regional: this.props.status[0].id_comite_comunitario_regional})
          this.setState({justificativa: this.props.status[0].feedback})
          this.setState({aprovar_requisicao: this.props.status[0].aprovar_requisicao})
        }

        this.aprovaRequisicao(this.props.status[0].aprovar_requisicao)
      }
    }
