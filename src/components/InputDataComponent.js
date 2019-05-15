import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class InputDataComponent extends Component {

    storage = localStorage
    state = {value: this.storage.getItem(this.props.element.id) == null ? "" : this.storage.getItem(this.props.element.id), flagValue: false}

    persistField() {
        let value = document.getElementById(this.props.element.id).value
        this.setState({value: value})     
        this.storage.setItem(this.props.element.id, value)
    }

    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <InputMask onFocus={() => {this.flagValue = true}} onKeyUp={() => this.persistField()} id={this.props.element.id} type="text" mask="99/99/9999" value={this.flagValue == true ? this.props.value : this.state.value} onChange={this.props.onChange}></InputMask>
                </label>                
            </div>
        );
    }
}