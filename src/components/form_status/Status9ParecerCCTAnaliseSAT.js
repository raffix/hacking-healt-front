import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';

export default class Status9ParecerCCTAnaliseSAT extends Component {

  state = {
    justificativa: '',
    aprovar_requisicao: 0,
    encaminhar_eua: 0
  }

  constructor(props) {
    super(props)
    this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this)
  }

  handleChangeJustificativa(event) {
      this.setState({justificativa: event.target.value});
  }

  submit(concluido) {
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 10,
      feedback: this.state.justificativa,
      concluido: concluido,
      aprovar_requisicao: this.state.aprovar_requisicao,
      encaminhar_eua: this.state.encaminhar_eua,
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

  aprovaParecer(value) {
     if (value == 1) {
       this.setState({aprovar_requisicao: 1})
     } else {
       this.setState({aprovar_requisicao: 0})
     }
  }

  encaminharEUA(value) {
    if (value == 1) {
      this.setState({encaminhar_eua: 1})
    } else {
      this.setState({encaminhar_eua: 0})
    }
  }

  render() {
    return (
      <div>
      {
        this.props.id_status == 9 || (this.props.id_status == 10 && this.props.concluido == 0) ?
        <div>

      {
        this.props.status[0].aprovar_requisicao == 1 ?
        <div className="InputText">
            <h3>Aprovar Requisição para atendimento local?</h3>
            <label className="LabelInputText">
                <span>Aprova parecer do comitê?</span>
                <span></span>
                <div className="radio-container"><input type="radio" onClick={() => this.aprovaParecer(1)} checked={this.state.aprovar_requisicao == 1 ? true : false} name="aprovar_requisicao" value="1" /><label>SIM</label></div>
                <div className="radio-container"><input type="radio" onClick={() => this.aprovaParecer(0)} checked={this.state.aprovar_requisicao == 0 ? true : false} name="aprovar_requisicao" value="0" /><label>NÃO</label></div>
            </label>
        </div> : <div className="InputText">
              <h3>Encaminhar aos EUA?</h3>
              <label className="LabelInputText">
                  <span>Encaminhar requisição para avaliação do Templo?</span>
                  <span></span>
                  <div className="radio-container"><input onClick={() => this.encaminharEUA(1)} checked={this.state.encaminhar_eua == 1 ? true : false} type="radio" name="encaminhar_eua" value="1" /><label>SIM</label></div>
                  <div className="radio-container"><input onClick={() => this.encaminharEUA(0)} checked={this.state.encaminhar_eua == 0 ? true : false} type="radio" name="encaminhar_eua" value="0" /><label>NÃO</label></div>
              </label>
          </div>
      }

        <div className="InputText">
            <h3>Justificativa Aprovação</h3>
            <label className="LabelInputText">
                <span>Justifique tua resposta</span>
                <span></span>
                <textarea onChange={this.handleChangeJustificativa} value={this.state.justificativa} name="justificar_resposta" id="justificar_resposta" >

                </textarea>
            </label>
        </div>


            {
              this.props.id_status == 10 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
