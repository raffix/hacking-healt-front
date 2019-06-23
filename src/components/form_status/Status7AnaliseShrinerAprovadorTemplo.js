import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';
import {UsuariosService} from '../../services/UsuariosService';

export default class Status7AnaliseShrinerAprovadorTemplo extends Component {

  state = {
    justificativa: '',
    aprovar_requisicao: 0,
    email_aprovador: 0
  }

  constructor(props) {
    super(props)
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
    this.getAprovador();
  }

  async getAprovador()
  {
    let service = new UsuariosService()
    service.getPorPerfil(10).then(res => res.json()).then(usuarios => {
      this.setState({email_aprovador: usuarios[0].Pessoa.email})
      console.log(usuarios)
    })
  }

  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  aprovaParecer(value) {
     if (value == 1) {
       this.setState({aprovar_requisicao: 1})
     } else {
       this.setState({aprovar_requisicao: 0})
     }
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 8,
      feedback: this.state.justificativa,
      concluido: concluido,
      aprovar_requisicao: this.state.aprovar_requisicao
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

  render() {
    return (
      <div>
      {
        this.props.id_status == 7 || (this.props.id_status == 8 && this.props.concluido == 0) ?
        <div>
        <div className="InputText">
            <h3>Aprova Requisição Clube?</h3>
            <label className="LabelInputText">
                <span>Aprova Requisição feita pelo Clube?</span>
                <span></span>
                <div className="radio-container"><input onClick={() => this.aprovaParecer(1)} checked={this.state.aprovar_requisicao == 1 ? true : false} type="radio" name="aprovar_requisicao" value="1" /><label>SIM</label></div>
                <div className="radio-container"><input onClick={() => this.aprovaParecer(0)} checked={this.state.aprovar_requisicao == 0 ? true : false} type="radio" name="aprovar_requisicao" value="1" /><label>NÃO</label></div>
            </label>
        </div>

        <div className="InputText">
            <h3>Justificativa Aprovação</h3>
            <label className="LabelInputText">
                <span>Justifique a aprovação acima</span>
                <span></span>
                <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa}  name="justificar_resposta" id="justificar_resposta" >

                </textarea>
            </label>
        </div>


        <div className="InputText">
            <h3>Encaminhar Comitê Comunitário Templo</h3>
            <label className="LabelInputText">
                <span></span>
                <span></span>
                <input type="text" disabled={true} value={this.state.email_aprovador}  name="email_shriner_aprovador_clube" id="email_shriner_aprovador_clube" />
            </label>
        </div>

            {
              this.props.id_status == 7 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
