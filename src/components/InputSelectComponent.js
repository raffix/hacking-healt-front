import React, { Component } from 'react';

export default class InputSelectComponent extends Component {
    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <select className="select-container" name={this.props.element.id}>
                    {this.props.element.options.map(op => {
                       return <option value={op.value} > {op.description} </option>
                    })}
                    </select>
                </label>            
                
            </div>
        );
    }
}