import React, { Component } from 'react';

export default class ApprovalHistComponent extends Component {

    render() {
        return(
            <div className="CarouselApproval">
             <div style={{float: 'left', width: '200px'}}>
                <img  style={{width: '75px', height: '90px', marginLeft: 20, marginTop: 30}} src={this.props.img} />
                <div style={{marginLeft: 15}}>
                    <p>{this.props.name}</p>
                    <p>{this.props.personFunction}</p>
                </div>
             </div>
             <div >
                 <div style={{paddingTop: 30}}>
                 <p >Data Aprovação: {this.props.dateApproval}</p>
                 <p>Observações: {this.props.note}</p>
                </div>
             </div>
          </div>
        );
    };

}