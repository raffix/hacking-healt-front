import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import './../styles/LoginStyle.css';
import './../styles/MinhasSolicitacoesStyle.css';
import {SolicitacoesSolicitanteService} from '../services/SolicitacoesSolicitanteService';
import {Date} from '../helpers/Date'
import { FaEdit } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";


const storage = localStorage


const custonTheme = {
  title: {
    fontSize: '22px',
    fontColor: '#FFFFFF',
  },
  contextMenu: {
    backgroundColor: '#E91E63',
    fontColor: '#FFFFFF',
  },
  header: {
    fontSize: '12px',
    fontColor: '#FFFFFF',
  },
  rows: {
    fontColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, .12)',
    hoverFontColor: '#eEbF93',
    hoverBackgroundColor: 'rgba(0, 0, 0, .24)',
  },
  cells: {
    cellPadding: '48px',
  },
  pagination: {
    fontSize: '13px',
    fontColor: '#FFFFFF',
    buttonFontColor: '#FFFFFF',
    buttonHoverBackground: 'rgba(255, 255, 255, .12)',
  },
  expander: {
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
  },
};

const solicitacoes = [
  {
    'id': null,
    'nome': null,
    'tipo': null,
    'status': null,
    'data': null,
  }
]

const columns = [
  {
      name: 'Id',
      selector: 'id',
      sortable: true,
      width: '50px'
  },
  {
    name: 'Justificativa',
    selector: 'descricao',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
  },
  {
    name: 'Encaminhado',
    selector: 'concluido',
    sortable: true,
  },
  {
    name: 'Tipo Solicitação',
    selector: 'tipo',
    sortable: true,
  },
  {
    name: 'Data',
    selector: 'data',
    sortable: true,
  },
  {
    cell: (row) => (
      <div>
      <a onClick={() => {
        console.log(row)

        if (row.obj.StatusAtualSolicitacaos[0].StatusSolicitacao.id != 1 || (row.obj.StatusAtualSolicitacaos[0].concluido == 1 && row.obj.StatusAtualSolicitacaos[0].StatusSolicitacao.id == 1)) {
          alert("Você não pode alterar esta solicitação após encaminhada!")
          return false;
        }


        storage.setItem('reload', 1);
        storage.setItem("descricao", row.descricao)

        Object.keys(row.obj.SolicitacaoProfissional).map(i => {
          storage.setItem(i, row.obj.SolicitacaoProfissional[i])
        });

        window.location.href = '/FormularioProfissional/'+row.id
      }
      }>
        <FaEdit />
      </a>
      <a onClick={() => {
        window.location.href = '/FormularioProfissionalPreview/'+row.id
      }}><FaSearchPlus /></a>
      </div>

    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

class MinhasSolicitacoes extends Component {

  state = {solicitacoes: []}

  constructor (props) {
    super(props);
    this.getData();
  }

  async getData () {
    let service = new SolicitacoesSolicitanteService();
    service.getAll().then(res => res.json())
    .then((result) => {
      console.log(result);
      let solicitacoes = [];
      result.map(d => {
        solicitacoes.push({
          'id': d.id,
          'descricao': d.descricao,
          'tipo': d.TipoSolicitacao.descricao_tipo,
          'status': d.StatusAtualSolicitacaos[0].StatusSolicitacao.descricao,
          'concluido': d.StatusAtualSolicitacaos[0].concluido == 0 ? 'NÃO' : 'SIM',
          'data': Date.isoTODatePtBr(d.dt_solicitacao),
          'obj': d
        })
      })

      this.setState({solicitacoes: solicitacoes})
    }, (error) => {
      alert("Erro! Contate o Administrador");
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="breadcrumbs">
          <Link className="linkBreadCrumb" to="/Inicial">Home</Link> /
          <a>Solicitações</a>
        </div>
        <div className="ContainerSolicitacoes">
          <div className="dataTable">
                    <DataTable
                    title="Solicitações"
                    columns={columns}
                    data={this.state.solicitacoes}
                    responsive={true}
                    allowOverflow={false}
                    customTheme={custonTheme}
                    highlightOnHover
                    pointerOnHover
                    pagination
                    onRowClicked={this.handleRowClicked}
                    />
                </div>
        </div>
      </div>
    );
  }
}

export default  MinhasSolicitacoes;
