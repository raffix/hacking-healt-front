import React, { Component } from 'react';
import {Carousel} from '3d-react-carousal';
import DataTable from 'react-data-table-component';
import ApprovalHistComponent from './ApprovalHistComponent';

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
  

const data = [
    { id: 1, solicitation: "Morbi id magna eleifend dolor ultrices scelerisque.Curabitur a justo neque." },
    { id: 2, solicitation: 'Nullam porta, purus id accumsan aliquam, urna lacus pulvinar nibh, non hendrerit augue nulla eu felis. ' },
    { id: 3, solicitation: 'Pellentesque porttitor justo massa, eu vestibulum nisi egestas ut. Donec dapibus massa sem, ac tincidunt eros semper ut.' },
];
const columns = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true,
        width: '50px'
    },
  {
    name: 'Solicitação',
    selector: 'solicitation',
    sortable: true,
  },
  
];


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
        />,
        <ApprovalHistComponent 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPNb50YGBFMvJpBfK2UVxqL8GHGR0PPIRn5Y6g7ALgYpzXqqSlg" 
        name="Edson Silva"
        personFunction="Florianópolis - Shriner"
        dateApproval="12/10/2018"
        note="Quisque quis facilisis nisl. Aliquam non bibendum nibh. Aliquam consectetur lectus ac nulla egestas placerat. 
        Donec ut diam at lectus elementum ornare in egestas dui. 
        Vestibulum quis lacinia lacus. In suscipit dolor vitae finibus varius. 
        Pellentesque eget facilisis arcu. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Nulla viverra eget dolor vel tincidunt. Quisque porttitor diam 
        non purus aliquam sagittis."
        />
];

export default class CarouselApprovalComponent extends Component {

    handleRowClicked = row => {
        console.log(row);
        
    };

    render() {
        return(
            <div>
             
                <div className="dataTable">
                    <DataTable
                    title="Solicitações"
                    columns={columns}
                    data={data}
                    responsive={true}
                    allowOverflow={false}
                    customTheme={custonTheme}
                    highlightOnHover
                    pointerOnHover
                    pagination
                    onRowClicked={this.handleRowClicked}
                    />
                </div>
                <div>
                    <Carousel slides={slides}/>
                </div>
                <div>
                    <button className="ActionsButtonsPrimary" >Deferir</button>
                    <button className="ActionsButtonsPrimary" >Indeferir</button>
                    <button className="ActionsButtonsPrimary" >Anexos</button>
                </div>
          </div>
        );
    };

    

}