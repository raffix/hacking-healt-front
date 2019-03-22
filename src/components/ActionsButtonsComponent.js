import React, { Component } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';

export default class ActionsButtonsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            positionNavigation: 0,
            disableNext: false,
            disablePrevious: true,
        }
    }

    next() {    
        
        let currentPosition = this.state.positionNavigation + 1;                    
        this.setState({"positionNavigation": currentPosition})     

        if (currentPosition > 0) {
            this.setState({"disablePrevious" : false})
        }                  

        if (currentPosition >= this.props.inputs.length - 1) {
            this.setState({"disableNext" : true})
        }
        
        console.table(currentPosition)
        return currentPosition
    }

    previous() {
        
        let currentPosition = this.state.positionNavigation - 1;
        this.setState({"positionNavigation": currentPosition})

        if (currentPosition <= 0) {
            currentPosition = 0
            this.setState({"positionNavigation": 0})
            this.setState({"disablePrevious" : true})
        }    

        if (currentPosition <= this.props.inputs.length - 1) {
            this.setState({"disableNext" : false})
        }

        return currentPosition
    }
    
    render() {
        return (
            <div>
                <button className="ActionsButtonsPrimary" disabled={this.state.disableNext} onClick={this.props.handlerNext}>Avançar</button>
                <a className="ActionsButtonsLink" disabled={this.state.disablePrevious} onClick={this.props.handlerPrevious}>Voltar pergunta <IoMdReturnLeft /></a>
            </div>
        );
    };

}