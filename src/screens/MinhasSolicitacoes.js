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
    'id': 1,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '01/04/2019',
  },
  {
    'id': 2,
    'nome': 'João Silva',
    'tipo': 'Criança',
    'status': 'Avaliação',
    'data': '10/04/2019',
  },
  {
    'id': 3,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '01/02/2019',
  },
  {
    'id': 4,
    'nome': 'Hospital Regional do Oeste',
    'tipo': 'Material',
    'status': 'Avaliação',
    'data': '03/03/2019',
  },
]
 
const columns = [
  {
      name: 'Id',
      selector: 'id',
      sortable: true,
      width: '50px'
  },
  {
    name: 'Descrição',
    selector: 'descricao',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
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
          'data': d.dt_solicitacao
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
        <Link className="linkHome" to="/Inicial">Home</Link>
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