import React, { Component } from 'react';
import InputTextComponent from './InputTextComponent';
import InputRadioComponent from './InputRadioComponent';
import InputCheckboxComponent from './InputCheckboxComponent';
import InputSelectComponent from './InputSelectComponent';
import InputPasswordComponent from './InputPasswordComponent';
import InputDataComponent from './InputDataComponent';
import InputCpfComponent from './InputCpfComponent';
import InputPhoneComponent from './InputPhoneComponent';
import InputCepComponent from './InputCepComponent';
import InputNumericalComponent from './InputNumericalComponent';
import ActionsButtonsComponent from './ActionsButtonsComponent';
import TextAreaComponent from './TextAreaComponent';


export default class NavigationFormComponent extends Component {

    state = {positionNavigation: 0, casesMove: 1, elements: []}
    
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
                        this.state.positionNavigation > 0 && this.props.inputs[this.state.positionNavigation - 1].type == 'text'?
                            <InputTextComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation > 0 && this.props.inputs[this.state.positionNavigation - 1].type == 'radio'?
                            <InputRadioComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation > 0 && this.props.inputs[this.state.positionNavigation - 1].type == 'checkbox'?
                            <InputCheckboxComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation > 0 && this.props.inputs[this.state.positionNavigation - 1].type == 'select'?
                            <InputSelectComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation > 0 && this.props.inputs[this.state.positionNavigation - 1].type == 'textarea'?
                            <TextAreaComponent disabled={true} sequence={this.state.positionNavigation} element={this.props.inputs[this.state.positionNavigation - 1]} />
                            :
                            <div></div>
                    }
                </div>

                <div className="NavigationFormFocus">

                    <div className="NavigationInputContainer">
                        {
                            this.props.inputs[this.state.positionNavigation].type == 'text' ?
                                <InputTextComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'radio' ?
                                <InputRadioComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'checkbox' ?
                                <InputCheckboxComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'select' ?
                                <InputSelectComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'password' ?
                                <InputPasswordComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'data' ?
                                <InputDataComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'cep' ?
                                <InputCepComponent disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'cpf' ?
                                <InputCpfComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'phone' ?
                                <InputPhoneComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'numerical' ?
                                <InputNumericalComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        {
                            this.props.inputs[this.state.positionNavigation].type == 'textarea' ?
                                <TextAreaComponent key={this.props.inputs[this.state.positionNavigation].id} disabled={false} sequence={this.state.positionNavigation + 1} element={this.props.inputs[this.state.positionNavigation]} /> : ''
                        }

                        <ActionsButtonsComponent ref={'actionsButtons'} handlerNext={this.handlerNext} handlerPrevious={this.handlerPrevious} submit={this.props.submit} inputs={this.props.inputs} />
                    </div>
                </div>


                <div className="NavigationFormNext">
                    <span style={{"color": "white", "float": "right"}}>Campo {this.state.positionNavigation + 1} de {this.props.inputs.length} </span>
                    {
                        this.state.positionNavigation < this.props.inputs.length-1 && this.props.inputs[this.state.positionNavigation + 1].type == 'text' ?
                            <InputTextComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} />
                            :
                            <div></div>
                    }

                    {
                    this.state.positionNavigation < this.props.inputs.length-1 && this.props.inputs[this.state.positionNavigation + 1].type == 'radio' ?
                        <InputTextComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation < this.props.inputs.length-1 && this.props.inputs[this.state.positionNavigation + 1].type == 'checkbox' ?
                            <InputCheckboxComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation < this.props.inputs.length-1 && this.props.inputs[this.state.positionNavigation + 1].type == 'select' ?
                            <InputSelectComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} />
                            :
                            <div></div>
                    }

                    {
                        this.state.positionNavigation < this.props.inputs.length-1 && this.props.inputs[this.state.positionNavigation + 1].type == 'textarea' ?
                            <TextAreaComponent disabled={true} sequence={this.state.positionNavigation + 2} element={this.props.inputs[this.state.positionNavigation + 1]} />
                            :
                            <div></div>
                    }


                </div>

                <div style={{display: "none"}}>

                    {
                        this.state.positionNavigation < this.props.inputs.length-2 && this.props.inputs[this.state.positionNavigation + 2].type == 'select' ?
                            <InputSelectComponent disabled={true} sequence={this.state.positionNavigation + 3} element={this.props.inputs[this.state.positionNavigation + 2]} />
                            :
                            <div></div>
                    }


                </div>

            </div>

        );
    }
}
