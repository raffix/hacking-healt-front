import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';
import {UsuariosService} from '../../services/UsuariosService';

export default class Status4ParecerCCRAnaliseSAR extends Component {

  state = {
    justificativa: '',
    encaminhar_clube: 0,
    aprovar_requisicao: 0,
    email_aprovador: '',
  }

  constructor(props) {
    super(props)
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
    this.getAprovador();
  }

  async getAprovador()
  {
    let service = new UsuariosService()
    service.getPorPerfil(7).then(res => res.json()).then(usuarios => {
      this.setState({email_aprovador: usuarios[0].Pessoa.email})
      console.log(usuarios)
    })
  }


  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 5,
      feedback: this.state.justificativa,
      concluido: concluido,
      encaminhar_clube: this.state.encaminhar_clube,
      aprovar_requisicao: this.state.aprovar_requisicao,
      requisicao_atendida_localmente: this.props.status[0].requisicao_atendida_localmente
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

  reivindicar() {
    let service = new MudarStatusSolicitacaoService();
    service.update(this.props.status[0].id, {})
    .then(res => res.json()).then(result => {
      this.setState({showReivindicar: false})
      console.log(result)
    });
  }

  aprovaParecer(value) {
     if (value == 1) {
       this.setState({aprovar_requisicao: 1})
     } else {
       this.setState({aprovar_requisicao: 0})
     }
  }

  encaminharClube(value) {
     if (value == 1) {
       this.setState({encaminhar_clube: 1})
     } else {
       this.setState({encaminhar_clube: 0})
     }
  }

  render() {
    return (
      <div>
      {
        this.props.id_status == 4 || (this.props.id_status == 5 && this.props.concluido == 0) ?
        <div>
        {
          this.props.status[0].requisicao_atendida_localmente == 1 ?
          <div className="InputText">
              <h3>Aprovar Requisição para atendimento local?</h3>
              <label className="LabelInputText">
                  <span>Aprova parecer do comitê?</span>
                  <span></span>
                  <div className="radio-container"><input onClick={() => this.aprovaParecer(1)} checked={this.state.aprovar_requisicao == 1 ? true : false} type="radio" name="aprovar_requisicao" value="1" id="aprovar_requisicao"/><label>SIM</label></div>
                  <div className="radio-container"><input onClick={() => this.aprovaParecer(0)} checked={this.state.aprovar_requisicao == 0 ? true : false} type="radio" name="aprovar_requisicao" value="0" id="aprovar_requisicao"/><label>NÃO</label></div>
              </label>
          </div> : ''
        }

        {this.props.status[0].requisicao_atendida_localmente == 0 ?
          <div className="InputText">
              <h3>Encaminhar ao clube?</h3>
              <label className="LabelInputText">
                  <span>Encaminhar requisição para avaliação do clube?</span>
                  <span></span>
                  <div className="radio-container"><input onClick={() => this.encaminharClube(1)} checked={this.state.encaminhar_clube == 1 ? true : false} type="radio" name="encaminhar_clube" value="1" id="encaminhar_clube"/><label>SIM</label></div>
                  <div className="radio-container"><input onClick={() => this.encaminharClube(0)} checked={this.state.encaminhar_clube == 0 ? true : false} type="radio" name="encaminhar_clube" value="0" id="encaminhar_clube"/><label>NÃO</label></div>
              </label>
          </div> : ''
        }

        <div className="InputText">
            <h3>Justificativa Aprovação</h3>
            <label className="LabelInputText">
                <span>Justifique sua resposta</span>
                <span></span>
                <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa} name="justificar_resposta2" id="justificar_resposta2" >

                </textarea>
            </label>
        </div>

        <div className="InputText">
            <h3>Email análise Shriner Aprovador Clube</h3>
            <label className="LabelInputText">
                <span></span>
                <span></span>
                <input type="text" disabled={true} onChange={this.handleChangeEmail} value={this.state.email_aprovador}  name="email_shriner_aprovador_clube" id="email_shriner_aprovador_clube" />
            </label>
        </div>

          {
            this.props.id_status == 4 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
