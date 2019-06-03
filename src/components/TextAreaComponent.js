import React, { Component } from 'react';

export default class TextAreaComponent extends Component {

    storage = localStorage
    state = {value: this.storage.getItem(this.props.element.id)}

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <textarea onChange={this.handleChange} disabled={this.props.disabled} name={this.props.element.id} id={this.props.element.id} >
                      {this.state.value} 
                    </textarea>
                </label>
            </div>
        );
    }

    componentDidMount() {

    }

}
