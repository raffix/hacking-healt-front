import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default class InputCheckboxComponent extends Component {

    storage = localStorage
    state = {
      value: this.storage.getItem(this.props.element.id),
      valuesArray: [],
      options: []
    }

    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      console.log(this.state.valuesArray)
    }

    handleChange(event) {
        let value = event.target.value
        let array = this.state.valuesArray;

        if (array.indexOf(value.toString()) > -1) {
            array.splice(array.indexOf(value.toString()), 1)
        } else {
          array.push(value)
        }

        this.setState({valuesArray: array})
    }

    render() {
        return (
            <div  className={"InputText "+this.props.element.id}>
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    {this.props.element.options.map(op => {
                       return <div key={op.value} className="checkbox-container">
                         <FormGroup row>
                        <FormControlLabel
                      control={
                         <Checkbox
                          checked={this.state.valuesArray.indexOf(op.value.toString()) > -1 ? true : false}
                          onChange={this.handleChange}
                          value={op.value}                      
                          color="primary"
                          key={op.value}
                          inputProps={{
                            'aria-label': 'secondary checkbox',
                            'name': op.id
                          }}
                        />
                      }
                      label={op.description}
                    /></FormGroup>
                       </div>
                    })}
                </label>

            </div>
        );
    }

    componentDidMount() {
      this.setState({valuesArray: this.storage.getItem(this.props.element.id) != null ? this.storage.getItem(this.props.element.id).split(',') : []})

    }
}
