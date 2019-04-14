import React, { Component } from 'react';

export default class InputPasswordComponent extends Component {
    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <input type="password" disabled={this.props.disabled} name={this.props.element.id} id={this.props.element.id} placeholder={this.props.element.placeholder} />
                </label>                
            </div>
        );
    }
}