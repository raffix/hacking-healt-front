import React, { Component } from 'react';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';

export default class Status6ParecerCCCAnaliseSAC extends Component {

state = {
  justificativa: '',
  aprovar_requisicao: 0,
  encaminhar_templo: 0
}

constructor(props) {
  super(props)
  this.handleChangeJustificativa = this.handleChangeJustificativa.bind(this);
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

aprovaParecer(value) {
   if (value == 1) {
     this.setState({aprovar_requisicao: 1})
   } else {
     this.setState({aprovar_requisicao: 0})
   }
}

encaminharTemplo(value) {
   if (value == 1) {
     this.setState({encaminhar_templo: 1})
   } else {
     this.setState({encaminhar_templo: 0})
   }
}

submit(concluido) {
  let data = {}
  let id = this.props.status[0].id_solicitacao

  data = {
    id_solicitacao: id,
    id_status: 7,
    feedback: this.state.justificativa,
    concluido: concluido,
    aprovar_requisicao: this.state.aprovar_requisicao,
    encaminhar_templo: this.state.encaminhar_templo
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
        this.props.id_status == 6 || (this.props.id_status == 7 && this.props.concluido == 0) ?
        <div>
      {
        this.props.status[0].requisicao_atendida_clube == 1 ?
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

      {
        this.props.status[0].requisicao_atendida_clube == 0 ?
        <div className="InputText">
            <h3>Encaminhar ao Templo?</h3>
            <label className="LabelInputText">
                <span>Encaminhar requisição para avaliação do Templo?</span>
                <span></span>
                <div className="radio-container"><input onClick={() => this.encaminharTemplo(1)} checked={this.state.encaminhar_templo == 1 ? true : false} type="radio" name="encaminhar_templo" value="1" /><label>SIM</label></div>
                <div className="radio-container"><input onClick={() => this.encaminharTemplo(0)} checked={this.state.encaminhar_templo == 0 ? true : false} type="radio" name="encaminhar_templo" value="0" /><label>NÃO</label></div>
            </label>

        </div> : ''
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
            this.props.id_status == 6 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
