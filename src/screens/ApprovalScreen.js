import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from "react-icons/fa";
import DataTable from 'react-data-table-component';
import {Date} from '../helpers/Date'
import {SolicitacoesAprovacaoService} from '../services/SolicitacoesAprovacaoService';

const storage = localStorage

const custonTheme = {
    title: {
      fontSize: '22px',
      fontColor: '#FFFFFF',
      backgroundColor: '#58120D',
    },
    contextMenu: {
      backgroundColor: '#E91E63',
      fontColor: '#FFFFFF',
    },
    header: {
      fontSize: '12px',
      fontColor: '#FFFFFF',
      backgroundColor: '#58120D',
    },
    rows: {
      fontColor: '#FFFFFF',
      backgroundColor: '#58120D',
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
      backgroundColor: '#58120D',
      buttonFontColor: '#FFFFFF',
      buttonHoverBackground: 'rgba(255, 255, 255, .12)',
    },
    expander: {
      fontColor: '#FFFFFF',
      backgroundColor: '#363640',
    },
  };

class ApprovalScreen extends Component {

  state = {
    data: [],
    visible : false,
    titleModal: "",
    textModal: [],
    visibleActions: {display: 'none'},
    observacao: "",
    id_solicitacao: 0,
    actions: [],
    divCarouselStyle: {
      height: '360px'
    }
  }

  storage = localStorage

  columns = [
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
      name: 'Tipo de solicitação',
      selector: 'tipo',
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
      name: 'Data',
      selector: 'data',
      sortable: true,
    },
    {
      cell: (row) => (
        <a onClick={() => {
          storage.setItem('id_instituicao', row.object.StatusAtualSolicitacaos[0].Usuario.id_instituicao)
          window.location = '/FormularioProfissionalPreview/'+row.id
        }
        }>
          <FaSearchPlus />
        </a>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  constructor(props) {
    super(props);
    this.getSolicitacoes()
  }

  async getSolicitacoes() {

    let service = new SolicitacoesAprovacaoService();
    service.getAll()
    .then(res => res.json())
    .then(result => {
      let solicitacoes = [];
      result.map(d => {
        solicitacoes.push({
          'id': d.id,
          'descricao': d.descricao,
          'tipo': d.TipoSolicitacao.descricao_tipo,
          'status': d.StatusAtualSolicitacaos[0].StatusSolicitacao.descricao,
          'concluido': d.StatusAtualSolicitacaos[0].concluido == 0 ? 'NÃO' : 'SIM',
          'data': Date.isoTODatePtBr(d.dt_solicitacao),
          'object': d,
          'keyField': d.id
        })
      })

      this.setState({data: solicitacoes})

    })
  }

  render() {
    return (
      <div className="App">
          <div className="breadcrumbs">
            <Link className="linkBreadCrumb" to="/Inicial">Home</Link> /
            <a>Aprovações</a>
          </div>
          <div className="dataTable">
              <DataTable
              title="Solicitações"
              columns={this.columns}
              data={this.state.data}
              responsive={true}
              allowOverflow={false}
              customTheme={custonTheme}
              highlightOnHover
              pointerOnHover
              pagination
              />
        </div>
      </div>
    );
  }
}

export default ApprovalScreen;
