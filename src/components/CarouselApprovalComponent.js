import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';
import DataTable from 'react-data-table-component';
import ApprovalHistComponent from './ApprovalHistComponent';
import {SolicitacoesAprovacaoService} from '../services/SolicitacoesAprovacaoService';
import { timingSafeEqual } from 'crypto';
import {Date} from '../helpers/Date'
import Modal from 'react-awesome-modal';
import {MudarStatusSolicitacaoService} from '../services/MudarStatusSolicitacaoService'

const divCarouselStyle = {
  height: '360px'
}

const divModal = {
  color: '#58120D'
}

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

const slides = [
    <ApprovalHistComponent
        img="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
        name="Pateric Silva"
        personFunction="Chapecó - Triagem"
        dateApproval="08/10/2018"
        note="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed sodales, odio a facilisis porttitor,
        leo dui tincidunt sapien,
        quis molestie nibh metus eu nisi. Integer lacinia felis libero,
        ac volutpat eros varius non.
        Ut lacinia enim in erat bibendum, vitae pretium eros finibus.
        Fusce ante erat, feugiat eget suscipit nec, placerat vitae elit.
        Duis nec ex non lacus consectetur elementum scelerisque at sapien.
        Duis gravida sapien egestas ex porttitor pulvinar.
        Duis sit amet enim sit amet nisl luctus semper non in ligula.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas."
        />,
        <ApprovalHistComponent
        img="https://pbs.twimg.com/profile_images/59577478/John_avatar_400x400.jpg"
        name="Darwin Souza"
        personFunction="Chapecó - Shriner"
        dateApproval="10/10/2018"
        note="Sed eu dui imperdiet, eleifend elit varius, congue sapien.
        Nulla non metus dolor. Cras lobortis vitae nibh sit amet pulvinar.
        Duis eget condimentum velit. Donec non vehicula ipsum, eget scelerisque turpis.
         Mauris tincidunt tortor sit amet mauris ultrices congue.
         Aenean hendrerit nisi non hendrerit dignissim.
         Aenean finibus id elit eget faucibus.
         Pellentesque malesuada quis arcu eget varius.
         Praesent pulvinar pellentesque sapien eu tristique."
        />
];

export default class CarouselApprovalComponent extends Component {

    state = {
      data: [],
      slides: slides,
      carousal: "",
      visible : false,
      titleModal: "",
      textModal: [],
      visibleActions: {display: 'none'},
      observacao: "",
      id_solicitacao: 0,
      actions: []
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
        name: 'Descrição',
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
        name: 'Data',
        selector: 'data',
        sortable: true,
      },
      {
        cell: (row) => (
          <a onClick={() => {
            console.log(row)
            this.setState({titleModal: "Solicitação de "+row.tipo})
            let textModal = []
            let especialidadeProfissional = row.object.SolicitacaoProfissional.EspecialidadeProfissional.descricao
            let tipoAcaoProfissional = row.object.SolicitacaoProfissional.TipoDeAcaoProfissional.descricao_tipo_a
            let custoEstimado = row.object.SolicitacaoProfissional.custo_estimado
            let dtNecessidade = row.object.SolicitacaoProfissional.dt_necessidade
            textModal.push("Especialidade do profissional: "+especialidadeProfissional)
            textModal.push("Tipo de ação do profissional: "+ tipoAcaoProfissional)
            textModal.push("Custo estimado do profissional: R$ "+ custoEstimado)
            textModal.push("Data da necessidade do profissional: "+ Date.isoTODatePtBr(dtNecessidade))
            textModal.push("Usuário Solicitação: "+ row.object.Usuario.Pessoa.nome)
            textModal.push("Data solicitação: "+ Date.isoTODatePtBr(row.object.createdAt))
            textModal.push("Instituição: " + row.object.Usuario.PessoaJuridica.Pessoa.nome)
            textModal.push("Rede: " + row.object.Usuario.Rede.descricao)

            this.setState({textModal: textModal})
            this.openModal()
          }
          }>
            Visualizar mais
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
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({observacao: event.target.value});
    }

    openModal() {
       this.setState({
           visible : true
       });
   }

   closeModal() {
       this.setState({
           visible : false
       });
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
            'data': Date.isoTODatePtBr(d.dt_solicitacao),
            'object': d,
            'keyField': d.id
          })
        })

        this.setState({data: solicitacoes})

      })
    }

    handleRowClicked = row =>  {
      console.log(row)
        let  slides = []
        row.object.StatusAtualSolicitacaos.map(d => {
          let name = d.Usuario.Pessoa.nome
          let rede = d.Usuario.Rede.descricao+ " - " + d.Usuario.Perfils[0].descricao
          let note = d.feedback

          if (note === "" ) {
            note = "Status "+ d.StatusSolicitacao.descricao
          }

          this.setState({visibleActions: {display: 'block'}})
          this.setState({id_solicitacao: d.id})

          slides.push(<ApprovalHistComponent
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHyfjsbFqGOlnJExJuFJ9kx3dZWIifCAqWS2MtflSAT5pEoeOgA"
            name={name}
            personFunction={rede}
            dateApproval={Date.isoTODatePtBr(d.createdAt)}
            note={note}
            />)
        })

        if (slides.length > 1)
          this.setState({carousal: <Carousel slides={slides}/>})
    };

    submit(status) {
      if (this.state.observacao === '') {
        alert("Informe um observação!")
        return false
      }

      let data = {
        feedback: this.state.observacao,
        id_solicitacao: this.state.id_solicitacao,
        id_status: status
      }

      let service = new MudarStatusSolicitacaoService();
      service.save(data).then(res => res.json).then((result) => {
        console.log(result);
      })
      console.log(data)
    }

    render() {
        return(
            <div>
               <Modal
                   visible={this.state.visible}
                   width="600"
                   height="500"
                   effect="fadeInUp"
                   onClickAway={() => this.closeModal()}
               >
                   <div style={divModal}>
                       <h1>{this.state.titleModal}</h1>
                       {this.state.textModal.map(tm => {
                         return (<p>{tm}</p>)
                       })}
                       <button className="ActionsButtonsPrimary" href="javascript:void(0);" onClick={() => this.closeModal()}>Fechar</button>
                   </div>
               </Modal>
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
                    onRowClicked={this.handleRowClicked}
                    />
                </div>
                <div id="carousel" style={divCarouselStyle}>
                    {this.state.carousal}
                </div>
                <div id="actions" style={this.state.visibleActions}>
                    <p>Observação:*</p>
                    <div>
                      <textarea onChange={this.handleChange}></textarea>
                    </div>
                    {this.state.actions}
                </div>
          </div>
        );
    };

    componentDidMount() {
      let actions = []
      let id_perfil = this.storage.getItem('perfil')

      switch (id_perfil) {
        case "3":
          actions = [
            <button className="" onClick={() => {this.submit(2)}} >Deferir</button>,
            <button className="" onClick={() => {this.submit(3)}} >Indeferir</button>
          ]
          break;
        case "4":
          actions = [
            <button className="" onClick={() => {this.submit(4)}} >Pegar para análise</button>,
            <button className="" onClick={() => {this.submit(5)}} >Resolvido</button>,
            <button className="" onClick={() => {this.submit(6)}} >Solicitar para regional</button>
          ]
          break;
        case "5":
          actions = [
            <button className="" onClick={() => {this.submit(7)}} >Pegar para análise</button>,
            <button className="" onClick={() => {this.submit(8)}} >Resolvido</button>,
            <button className="" onClick={() => {this.submit(9)}} >Solicitar para regional</button>
          ]
          break;
        case "6":
          actions = [
            <button className="" onClick={() => {this.submit(10)}} >Pegar para análise</button>,
            <button className="" onClick={() => {this.submit(11)}} >Resolvido</button>,
          ]
          break;
      }
      this.setState({actions: actions})
    }
}
