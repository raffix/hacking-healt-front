import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';

export default class Status8AnaliseComiteComunitarioTemplo extends Component {

  state = {
    justificativa: '',
    aprovar_requisicao: 0,
    caso_envio_eua: 0,
    existe_estimativa_de_valor: ''
  }

  constructor(props) {
    super(props)
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
    this.handleEstimativaValor = this.handleEstimativaValor.bind(this);
  }

  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  handleEstimativaValor(event) {
      this.setState({existe_estimativa_de_valor: event.target.value});
  }

  aprovaParecer(value) {
     if (value == 1) {
       this.setState({aprovar_requisicao: 1})
     } else {
       this.setState({aprovar_requisicao: 0})
     }
  }

  casoEnvioEUA(value) {
    if (value == 1) {
      this.setState({caso_envio_eua: 1})
    } else {
      this.setState({caso_envio_eua: 0})
    }
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 9,
      feedback: this.state.justificativa,
      concluido: concluido,
      aprovar_requisicao: this.state.aprovar_requisicao
    }

    if (this.state.aprovar_requisicao == 0) {
      data['caso_envio_eua'] = this.state.caso_envio_eua
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

  render() {
    return (
      <div>
      {
        this.props.id_status == 8 || (this.props.id_status == 9 && this.props.concluido == 0) ?
        <div>
        <div className="InputText">
            <h3>A requisição será atendida pelo Templo?</h3>
            <label className="LabelInputText">
                <span>Resolve na esfera do Templo ou não?</span>
                <span></span>
                <div className="radio-container"><input type="radio" onClick={() => this.aprovaParecer(1)} checked={this.state.aprovar_requisicao == 1 ? true : false} name="aprovar_requisicao" value="1" /><label>SIM</label></div>
                <div className="radio-container"><input type="radio" onClick={() => this.aprovaParecer(0)} checked={this.state.aprovar_requisicao == 0 ? true : false} name="aprovar_requisicao" value="0" /><label>NÃO</label></div>
            </label>
        </div>

        {
          this.state.aprovar_requisicao == 0 ?
          <div className="InputText">
              <h3>É caso para envio aos EUA?</h3>
              <label className="LabelInputText">
                  <span>A requisição deve ser encaminhada aos EUA?</span>
                  <span></span>
                  <div className="radio-container"><input type="radio" onClick={() => this.casoEnvioEUA(1)} checked={this.state.caso_envio_eua == 1 ? true : false} type="radio" name="envio_eua" value="1" /><label>SIM</label></div>
                  <div className="radio-container"><input type="radio" onClick={() => this.casoEnvioEUA(0)} checked={this.state.caso_envio_eua == 0 ? true : false} name="envio_eua" value="0" /><label>NÃO</label></div>
              </label>
          </div> : ''
      }

        <div className="InputText">
            <h3>Justificativa Resposta Aprovação</h3>
            <label className="LabelInputText">
                <span>Justique tua resposta</span>
                <span></span>
                <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa} name="justificar_resposta" id="justificar_resposta" >

                </textarea>
            </label>
        </div>

        <div className="InputText">
            <h3>Existe alguma estimativa de valor a ser desembolsada para esta requisição?</h3>
            <label className="LabelInputText">
                <span>Saberia informar se conseguimos estimar aproximadamente o montante a ser investido?</span>
                <span></span>
                <input type="text" onChange={this.handleEstimativaValor} value={this.state.existe_estimativa_de_valor}  name="estimativa" id="estimativa" />
            </label>
        </div>

            {
              this.props.id_status == 8 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
