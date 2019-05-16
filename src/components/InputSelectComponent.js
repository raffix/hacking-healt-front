import React, { Component } from 'react';

export default class InputSelectComponent extends Component {

    storage = localStorage
    state = {value: this.storage.getItem(this.props.element.id)}

    constructor(props) {
        super(props)
        console.log(props)
        this.handleChange = this.handleChange.bind(this);
        console.log(this.state.value)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        this.persistField()
    }

    persistField() {
        let value = document.getElementById(this.props.element.id).value
        this.storage.setItem(this.props.element.id, value)
    }

    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    <select defaultValue={this.state.value} onChange={this.handleChange} value={this.state.value} id={this.props.element.id} className="select-container" name={this.props.element.id}>
                    {this.props.element.options.map(op => {
                        return <option key={op.value} value={op.value}  > {op.description} </option>

                    })}
                    </select>
                </label>

            </div>
        );
    }

    componentDidMount() {
      if (this.storage.getItem('id') == null)
          this.persistField()      
    }
}
