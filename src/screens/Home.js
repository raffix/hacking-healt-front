import React, { Component } from 'react';
import InputTextComponent from './InputTextComponent';
import ActionsButtonsComponent from './ActionsButtonsComponent';

export default class Home extends Component {

    state = {positionNavigation: 0}

    constructor(props) {
        super(props);
        this.handlerNext = this.handlerNext.bind(this)
        this.handlerPrevious = this.handlerPrevious.bind(this)
                
    }

    handlerNext() {         
        this.setState({
            positionNavigation: this.refs['actionsButtons'].next()
        })               
      }

      handlerPrevious() {            
        this.setState({
            positionNavigation: this.refs['actionsButtons'].previous()
        })               
      }

    render() {
        return (
            <div className="NavigationForm">
                {/* { this.props.elements[this.state.positionNavigation] } */}
                
                <div className="NavigationFormPrevious">
                    {
                        this.state.positionNavigation > 0 ?
                            <InputTextComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} /> 
                            :
                            <div></div>
                    }
                </div>

                <div className="NavigationFormFocus">
                    
                    <div className="NavigationInputContainer">
                        <InputTextComponent disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} />
                        <ActionsButtonsComponent ref={'actionsButtons'} handlerNext={this.handlerNext} handlerPrevious={this.handlerPrevious} inputs={this.props.inputs} />
                    </div>
                </div>


                <div className="NavigationFormNext">                    
                    {   
                        this.state.positionNavigation < this.props.inputs.length-1 ?
                            <InputTextComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} /> 
                            :
                            <div></div>
                    }
                </div>          

            </div>
            
        );
    }
}
