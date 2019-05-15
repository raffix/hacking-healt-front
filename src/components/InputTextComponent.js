import React, { Component } from 'react';

export default class InputTextComponent extends Component {

    storage = localStorage
    state = {value: this.storage.getItem(this.props.element.id)}

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.storage.setItem(this.props.element.id, this.state.value)
    }

    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <input  onChange={this.handleChange} value={this.state.value}  type="text" disabled={this.props.disabled} name={this.props.element.id} id={this.props.element.id} placeholder={this.props.element.placeholder} />
                </label>                
            </div>
        );
    }

    componentDidMount() {
        
    }
    
}