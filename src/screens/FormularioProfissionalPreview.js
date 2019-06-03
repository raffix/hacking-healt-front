import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import NavigationFormComponent from './../components/NavigationFormComponent';
import FormTitleComponent from './../components/FormTitleComponent';
import {Date} from '../helpers/Date'
import {TiposDeAcoesService} from '../services/TiposDeAcoesProfissionaisService';
import {EspecialidadesProfissionaisService} from '../services/EspecialidadesProfissionaisService';
import {SolicitacaoProfissionalService} from '../services/SolicitacaoProfissionalService';
import {SolicitacoesAprovacaoService} from '../services/SolicitacoesAprovacaoService';
import Status1EmAtendimentoSolicitacao from './../components/form_status/Status1EmAtendimentoSolicitacao';
import Status2EmAprovacaoShirenerRegional from './../components/form_status/Status2EmAprovacaoShirenerRegional';
import Status3CominteComunitarioRegional from './../components/form_status/Status3CominteComunitarioRegional';
import Status4ParecerCCRAnaliseSAR from './../components/form_status/Status4ParecerCCRAnaliseSAR';
import Status5AnaliseComiteComunitarioClube from './../components/form_status/Status5AnaliseComiteComunitarioClube';
import Status6ParecerCCCAnaliseSAC from './../components/form_status/Status6ParecerCCCAnaliseSAC';
import Status7AnaliseShrinerAprovadorTemplo from './../components/form_status/Status7AnaliseShrinerAprovadorTemplo';
import Status8AnaliseComiteComunitarioTemplo from './../components/form_status/Status8AnaliseComiteComunitarioTemplo';
import Status9ParecerCCTAnaliseSAT from './../components/form_status/Status9ParecerCCTAnaliseSAT';


const storage = localStorage

class FormularioProfissionalPreview extends Component {

  state = {
    descricao: '',
    especialidades: [],
    acoes: [],
    data_inicial_periodo_necessidade: '',
    data_final_periodo_necessidade: '',
    custo_estimado: '',
    justificativa_valor: '',
    outra_acao: '',
    outra_especialidade: '',
    exibir_actions: true,
    status_solicitacoes: [],
    id_usuario_reivindicacao: null,
    id_status: null,
    concluido: null,
    view_form: null
  }

  constructor(props) {
    super(props);

    console.log(props)
  }

  chekcPerfil() {

    switch (storage.getItem('perfil')) {
      case '3':
        return (
          <Status1EmAtendimentoSolicitacao
            id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido}
          />
        )
        break
      case '4':
        return (
          <Status2EmAprovacaoShirenerRegional
          id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
          id_status={this.state.id_status}
          concluido={this.state.concluido} />
        )
        break
      case '5':
          return (
            <Status3CominteComunitarioRegional id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido} />
          )
      case '6':
          return (
            <Status4ParecerCCRAnaliseSAR id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido} />
          )
    case '7':
        return (
          <Status5AnaliseComiteComunitarioClube id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
          id_status={this.state.id_status}
          concluido={this.state.concluido} />
        )
      break
    case '8':
        return (
          <Status6ParecerCCCAnaliseSAC id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
          id_status={this.state.id_status}
          concluido={this.state.concluido} />
        )
      break
    case '9':
          return (
            <Status7AnaliseShrinerAprovadorTemplo id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido} />
          )
      break
    case '10':
          return (
            <Status8AnaliseComiteComunitarioTemplo id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido} />
          )
    break
    case '11':
          return (
            <Status9ParecerCCTAnaliseSAT id_usuario_reivindicacao={this.state.id_usuario_reivindicacao} status={this.state.status_solicitacoes}
            id_status={this.state.id_status}
            concluido={this.state.concluido} />
          )
    break
    }
  }

  render() {
    return (
      <div className="App">
        <div className="breadcrumbs">
          <Link className="linkBreadCrumb" to="/Inicial">Home</Link> /
          <a>Requisição profissional</a>
        </div>

        <div style={{marginLeft: 0}}>
          <h1 style={{marginTop: 80}}>Requisição profissional</h1>

          <div>
            <p><strong>Especialidades: </strong></p>
            <span style={{color: 'white'}}>{this.state.especialidade}</span>
          </div>
          <div>
            <p><strong>Ações: </strong></p>
            <span style={{color: 'white'}}>{this.state.acoes}</span>
          </div>
          <div >
            <p>
              <strong>Justificativa da necessidade: </strong>
              <span style={{color: 'white'}}>{this.state.descricao}</span>
            </p>
          </div>
          <div>
            <p>
              <strong>Período da necessidade: </strong>
              <span style={{color: 'white'}}>{this.state.data_inicial_periodo_necessidade} à {this.state.data_final_periodo_necessidade}</span>
            </p>
          </div>
          <div style={{width: '100%'}}>
            <p>
            <strong>Custo estimado:</strong> <span style={{color: 'white'}}>R$ {this.state.custo_estimado}</span>
            <strong style={{marginLeft: 20}}>Justificativa do valor:</strong> <span style={{color: 'white'}}>{this.state.justificativa_valor}</span>
            </p>
          </div>
          <div style={{marginTop: '200'}}>
            {this.state.status_solicitacoes.map((s, i) => {
              switch (s.id_status) {
                case 1:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Validado entendimento por: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                  break;
                case 2:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Validado entendimento por: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>Parecer sobre a solicitação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;
                case 3:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome Shriner Aprovador Regional: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>Aprova requisição:  <span style={{color: 'white'}}>{s.aprovar_requisicao == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Justificativa Resposta: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Encaminhamento Comitê: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;
                case 4:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome Shriner Comitê Comunitário Regional Regional: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>A requisição será atendida localmente?:  <span style={{color: 'white'}}>{s.requisicao_atendida_localmente == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Justificativa Resposta: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Existe alguma estimativa de valor a ser desembolsada para esta requisição?:  <span style={{color: 'white'}}>{s.existe_estimativa_de_valor}</span></p></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Encaminhamento Comitê: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;
                case 5:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      {
                        s.requisicao_atendida_localmente != null ?
                        <div><p>Aprovar Requisição para atendimento local?:  <span style={{color: 'white'}}>{s.requisicao_atendida_localmente == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                        : ''
                      }
                      {
                        s.encaminhar_clube != null ?
                        <div><p>Encaminhar ao clube?:  <span style={{color: 'white'}}>{s.encaminhar_clube == 1 ? 'SIM' : 'NÃO'}</span></p></div> : ''
                      }
                      <div><p>Justificativa Aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Envio Análise  Shriner Aprovador Clube: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;

                case 6:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome Shriner Comitê Comunitário Clube: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>A requisição será atendida pelo Clube?:  <span style={{color: 'white'}}>{s.requisicao_atendida_clube == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Justificativa Resposta Aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Existe alguma estimativa de valor a ser desembolsada para esta requisição?:  <span style={{color: 'white'}}>{s.existe_estimativa_de_valor}</span></p></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Envio Shriner Aprovador Clube: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;

                case 7:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      {
                        s.requisicao_atendida_localmente != null ?
                        <div><p>Aprovar Requisição para atendimento local?:  <span style={{color: 'white'}}>{s.requisicao_atendida_localmente == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                        : ''
                      }
                      {
                        s.encaminhar_templo != null ?
                        <div><p>Encaminhar templo:  <span style={{color: 'white'}}>{s.encaminhar_templo == 1 ? 'SIM' : 'NÃO'}</span></p></div> : ''
                      }
                      <div><p>Justificativa Aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Envio Análise  Shriner Aprovador Templo: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;

                case 8:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Shriner Aprovador Templo: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>Aprova Requisição Clubel?:  <span style={{color: 'white'}}>{s.aprovar_requisicao == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Justificativa a aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;

                case 9:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome Shriner Comitê Comunitário Templo: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>
                      <div><p>A requisição será atendida pelo Templo?:  <span style={{color: 'white'}}>{s.aprovar_requisicao == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      {
                        s.aprovar_requisicao == 0 ?
                        <div><p>É caso para envio aos EUA?:  <span style={{color: 'white'}}>{s.caso_envio_eua == 1 ? 'SIM' : 'NÃO'}</span></p></div> : ''
                      }

                      <div><p>Justificativa Resposta Aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>
                      <div><p>Existe alguma estimativa de valor a ser desembolsada para esta requisição?:  <span style={{color: 'white'}}>{s.existe_estimativa_de_valor}</span></p></div>
                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data Envio Shriner Aprovador Templo: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                    </div>
                  )
                break;

                case 10:
                  return (
                    <div style={{backgroundColor: '#400A07', width: '100%', minHeight: 150, marginTop: 30}}>
                      <p>Nome: <span style={{color: 'white'}}>{s.Usuario.Pessoa.nome}</span></p>
                      <p>Telefone: <span style={{color: 'white'}}>{s.Usuario.Pessoa.telefone}</span> E-mail: <span style={{color: 'white'}}> {s.Usuario.Pessoa.email}</span></p>

                      <div><p>Aprovar Requisição para atendimento local?:  <span style={{color: 'white'}}>{s.aprovar_requisicao == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Encaminhar aos EUA?:  <span style={{color: 'white'}}>{s.encaminhar_eua == 1 ? 'SIM' : 'NÃO'}</span></p></div>
                      <div><p>Justificativa Aprovação: </p> <span style={{color: 'white'}}>{s.feedback}</span></div>

                      <div><p>Status: <span style={{color: 'white'}}>{s.StatusSolicitacao.descricao}</span> </p></div>
                      <div><p>Data tomada decisão: <span style={{color: 'white'}}>{Date.isoTODatePtBr(s.updatedAt)}</span> </p></div>
                      <div><p>Prazo total em dias do fluxo: <span style={{color: 'white'}}>1</span> </p></div>                      
                    </div>
                  )
                break;

              }

            })}
          <div>
          </div>

          <div style={{width: '50%'}}>
            {this.state.view_form}
          </div>
          {
          this.state.exibir_actions == true ?
          <div>
            <button onClick={() => this.submit(0)} className="ActionsButtonsPrimary" >
                Salvar e Permancer
            </button>
            <button onClick={() => this.submit(1)} className="ActionsButtonsPrimary" >
                Salvar e Encaminhar
            </button>
          </div> : ''
          }
        </div>
        </div>
      </div>
    );
  }


  submit(concluido) {

    let data = {}
    let inputs = [
      "id_especialidade",
      "outra_especialidade",
      "id_tipo_acao",
      "outra_acao",
      "descricao",
      "data_inicial_periodo_necessidade",
      "data_final_periodo_necessidade",
      "custo_estimado",
      "justificativa_valor"
    ]

    inputs.map(d => {

        if (d == 'id_especialidade' || d == 'id_tipo_acao') {
            data[d] = storage.getItem(d).split(',')
        } else {
          data[d] = storage.getItem(d)
        }
    })

    data['concluido'] = concluido

    let service = new SolicitacaoProfissionalService()
    let id_storage = storage.getItem('id')

    if (
      (this.props.match.params.hasOwnProperty('id') && this.props.match.params.id > 0)
    ) {
      let id = this.props.match.params.id

      service.update(id, data).then(res => res.json())
      .then((result) => {
        alert("Solicitação atualizada com sucesso");
        inputs.map(d => {
          storage.removeItem(d.id)
        })
        window.location = '/MinhasSolicitacoes';
      }, (error) => {
        alert("Erro! Contate o Administrador");
        console.log(error)
      })

    } else {
      service.save(data).then(res => res.json())
      .then((result) => {
        alert("Solicitação salva com sucesso");
        inputs.map(d => {
          storage.removeItem(d.id)
        })

        window.location = '/Inicial';
      }, (error) => {
        alert("Erro! Contate o Administrador");
        console.log(error)
      })
    }

    console.log(data);
  }


  componentDidMount() {
    let especialidades = []
    let acoes = []
    let especialidadesStorage = []
    let acoesStorage = []

    if (this.props.match.params.hasOwnProperty('id') && this.props.match.params.id > 0 && storage.getItem('id') == null) {
      let service = new SolicitacoesAprovacaoService();
      service.getById(this.props.match.params.id)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({
            descricao: result.descricao,
            data_inicial_periodo_necessidade: Date.isoTODatePtBr(result.SolicitacaoProfissional.data_inicial_periodo_necessidade),
            data_final_periodo_necessidade: Date.isoTODatePtBr(result.SolicitacaoProfissional.data_final_periodo_necessidade),
            custo_estimado: result.SolicitacaoProfissional.custo_estimado,
            justificativa_valor: result.SolicitacaoProfissional.justificativa_valor,
            outra_acao: result.SolicitacaoProfissional.outra_acao,
            outra_especialidade: result.SolicitacaoProfissional.outra_especialidade,
            status_solicitacoes: result.StatusAtualSolicitacaos
          })

          console.log(result.StatusAtualSolicitacaos)
          storage.setItem('descricao', result.descricao)
          storage.setItem('data_inicial_periodo_necessidade', Date.isoTODatePtBr(result.SolicitacaoProfissional.data_inicial_periodo_necessidade))
          storage.setItem('data_final_periodo_necessidade', Date.isoTODatePtBr(result.SolicitacaoProfissional.data_final_periodo_necessidade))
          storage.setItem('custo_estimado', result.SolicitacaoProfissional.custo_estimado)
          storage.setItem('justificativa_valor', result.SolicitacaoProfissional.justificativa_valor)
          storage.setItem('outra_acao', result.SolicitacaoProfissional.outra_acao)
          storage.setItem('outra_especialidade', result.SolicitacaoProfissional.outra_especialidade)

          if (result.StatusAtualSolicitacaos[0].id_status > 1 || (result.StatusAtualSolicitacaos[0].id_status == 1 && result.StatusAtualSolicitacaos[0].concluido == 1)) {
            this.setState({exibir_actions: false})
          }

          this.setState({id_usuario_reivindicacao: result.StatusAtualSolicitacaos[0].id_usuario_reivindicacao})
          this.setState({concluido: result.StatusAtualSolicitacaos[0].concluido})
          this.setState({id_status: result.StatusAtualSolicitacaos[0].id_status})

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

          this.setState({view_form: this.chekcPerfil()})

          this.setState({acoes: acoes})
      })

    } else {
      this.setState(
        {
          descricao: storage.getItem('descricao'),
          data_inicial_periodo_necessidade: storage.getItem('data_inicial_periodo_necessidade'),
          data_final_periodo_necessidade: storage.getItem('data_final_periodo_necessidade'),
          custo_estimado: storage.getItem('custo_estimado'),
          justificativa_valor:storage.getItem('justificativa_valor'),
          outra_acao: storage.getItem('outra_acao'),
          outra_especialidade: storage.getItem('outra_especialidade')
        })

        especialidades = storage.getItem('id_especialidade').split(',')
        acoes = storage.getItem('id_tipo_acao').split(',')

        let serviceTipoAcao = new TiposDeAcoesService();
        serviceTipoAcao.getAll().then(res => res.json())
        .then((result) => {
          let tiposDeAcoes = [];

          result.map(d => {
            if (acoes.indexOf(d.id.toString()) > -1) {
              if (d.id != 1)
                tiposDeAcoes.push(<li>{d.descricao_tipo_acao}</li>)
              else
                tiposDeAcoes.push(<li>{this.state.outra_acao}</li>)
            }
          })

          this.setState({acoes: tiposDeAcoes})

        })

        let serviceEspecialidadesProfissionais = new EspecialidadesProfissionaisService();

        serviceEspecialidadesProfissionais.getAll().then(res => res.json())
        .then((result) => {
          let especialidadesProfissionais = [];

          result.map(d => {
            if (especialidades.indexOf(d.id.toString()) > -1) {
              if (d.id != 1)
                especialidadesProfissionais.push(<li>{d.descricao}</li>)
              else
                especialidadesProfissionais.push(<li>{this.state.outra_especialidade}</li>)
            }
          })

          this.setState({especialidade: especialidadesProfissionais})
        })
    }
  }
}

export default FormularioProfissionalPreview;
