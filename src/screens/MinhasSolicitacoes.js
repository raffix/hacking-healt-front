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
    name: 'Nome',
    selector: 'nome',
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

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="ContainerSolicitacoes">
          <div className="dataTable">
                    <DataTable
                    title="Solicitações"
                    columns={columns}
                    data={solicitacoes}
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

export default Login;