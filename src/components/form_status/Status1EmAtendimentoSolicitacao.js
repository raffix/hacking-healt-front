import React, { Component } from 'react';
import {SolicitacaoProfissionalService} from '../../services/SolicitacaoProfissionalService';
import {MudarStatusSolicitacaoService} from '../../services/MudarStatusSolicitacaoService';
import {UsuariosService} from '../../services/UsuariosService';

const storage = localStorage

export default class Status1EmAtendimentoSolicitacao extends Component {

  state = {showReivindicar: true, email_aprovador: '', parecer: ''}

  constructor(props) {
    super(props)
    this.getShrinerAprovadorRegional()
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeParecer = this.handleChangeParecer.bind(this);
  }

  handleChangeEmail(event) {
      this.setState({email_aprovador: event.target.value});
  }

  handleChangeParecer(event) {
      this.setState({parecer: event.target.value});
  }

  async getShrinerAprovadorRegional()
  {
    let service = new UsuariosService()
    let id_instituicao = storage.getItem('id_instituicao')
    service.getPorPerfilEInstituicao(4, id_instituicao).then(res => res.json()).then(usuarios => {
      this.setState({email_aprovador: usuarios[0].Pessoa.email})
      console.log(usuarios)
    })
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
    console.log(this.props.status[0])
    let data = {}
    let id = this.props.status[0].id_solicitacao

    data = {
      id_solicitacao: id,
      id_status: 2,
      feedback: this.state.parecer,
      concluido: concluido,
      email_shriner_aprovador_regional: this.state.email_aprovador,
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
        this.props.id_status == 1 || (this.props.id_status == 2 && this.props.concluido == 0) ?
        <div>
        <div className="InputText">
            <h3>Parecer sobre a solicitação</h3>
            <label className="LabelInputText">
                <span>Faça as consideração que julgue necessárias sobre a solicitação</span>
                <span></span>
                <textarea onChange={this.handleChangeParecer} value={this.state.parecer} name="parecer_solicitacao" id="parecer_solicitacao" >

                </textarea>
            </label>
        </div>

        <div className="InputText">
            <h3>E-mail Shriner Aprovador Regional</h3>
            <label className="LabelInputText">
                <span></span>
                <span></span>
                <input type="text" onChange={this.handleChangeEmail} value={this.state.email_aprovador}  name="email_shriner_parovador_regional" id="email_shriner_parovador_regional" />
            </label>
        </div>

            {
              this.props.id_status == 1 && this.state.showReivindicar == true && this.props.id_usuario_reivindicacao == null ?
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
    this.setState({email_aprovador: this.props.status[0].email_shriner_aprovador_regional})
    this.setState({parecer: this.props.status[0].feedback})
  }


}
