import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';

export default class Status5AnaliseComiteComunitarioClube extends Component {

    state = {
      justificativa: '',
      requisicao_atendida_clube: 0,
      existe_estimativa_de_valor: ''
    }

  constructor(props) {
    super(props)
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
    this.handleEstimativaValor = this.handleEstimativaValor.bind(this);
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 6,
      feedback: this.state.justificativa,
      concluido: concluido,
      requisicao_atendida_clube: this.state.requisicao_atendida_clube,
      existe_estimativa_de_valor: this.state.existe_estimativa_de_valor
    }

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

  reivindicar() {
    let service = new MudarStatusSolicitacaoService();
    service.update(this.props.status[0].id, {})
    .then(res => res.json()).then(result => {
      this.setState({showReivindicar: false})
      console.log(result)
    });
  }

  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  handleEstimativaValor(event) {
      this.setState({existe_estimativa_de_valor: event.target.value});
  }

  requisicaoAtendida(value) {
    this.setState({requisicao_atendida_clube: value})
  }

  render() {
    return (
      <div>
      {
        this.props.id_status == 5 || (this.props.id_status == 6 && this.props.concluido == 0) ?
        <div>
        <div className="InputText">
            <h3>A requisição será atendida pelo Clube?</h3>
            <label className="LabelInputText">
                <span>Resolve na região do clube ou não?</span>
                <span></span>
                <div className="radio-container"><input type="radio" onClick={() => this.requisicaoAtendida(1)} checked={this.state.requisicao_atendida_clube == 1 ? true : false} name="resolve_no_clube" value="1" /><label>SIM</label></div>
                <div className="radio-container"><input type="radio" onClick={() => this.requisicaoAtendida(0)} checked={this.state.requisicao_atendida_clube == 0 ? true : false} name="resolve_no_clube" value="0" /><label>NÃO</label></div>
            </label>

        </div>
        <div className="InputText">
            <h3>Justificativa Resposta Aprovação</h3>
            <label className="LabelInputText">
                <span>Justique tua resposta</span>
                <span></span>
                <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa}  name="justificar_resposta" id="justificar_resposta" >

                </textarea>
            </label>
        </div>

        <div className="InputText">
            <h3>Existe alguma estimativa de valor a ser desembolsada para esta requisição?</h3>
            <label className="LabelInputText">
                <span>Saberia informar se conseguimos estimar aproximadamente o montante a ser investido?</span>
                <span></span>
                <input onChange={this.handleEstimativaValor} value={this.state.existe_estimativa_de_valor} type="text"  name="estimativa" id="estimativa" />
            </label>
        </div>
            {
              this.props.id_status == 5 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
}
