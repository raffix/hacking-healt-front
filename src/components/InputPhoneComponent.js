import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class InputPhoneComponent extends Component {
    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <InputMask type="text" mask="+55 \(99\) 99999-9999" value={this.props.value} onChange={this.props.valida}></InputMask>
                </label>                
            </div>
        );
    }
}