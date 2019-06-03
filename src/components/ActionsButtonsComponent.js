import React, { Component } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';

export default class ActionsButtonsComponent extends Component {

    storage = localStorage

    state = {
        positionNavigation: 0,
        disableNext: false,
        disablePrevious: true,
    }

    next() {

        if (this.props.inputs[this.state.positionNavigation].type != 'checkbox') {
          let value = document.getElementById(this.props.inputs[this.state.positionNavigation].id).value
          this.storage.setItem(this.props.inputs[this.state.positionNavigation].id, value)
        } else {
          let elementsChecked = document.querySelectorAll('input[name="'+this.props.inputs[this.state.positionNavigation].id+'"]:checked');
          let values = []
          elementsChecked.forEach(function(e) {
            values.push(e.value)
          })

          this.storage.setItem(this.props.inputs[this.state.positionNavigation].id, values)
        }

        let currentPosition = this.state.positionNavigation + 1;

        if (this.props.inputs[currentPosition - 1].type == "select" || this.props.inputs[currentPosition - 1].type == "checkbox" ) {
            let value = this.storage.getItem(this.props.inputs[currentPosition - 1].id )

            if (value.includes(',')) {
              let valueArray = value.split(',')

              valueArray.forEach(function(e) {
                if (e == 1) {
                  value = 1
                }
              })
            }

            if (value != 1) {
                currentPosition = currentPosition + 1;
            }
        }

        this.setState({"positionNavigation": currentPosition})

        if (currentPosition > 0) {
            this.setState({"disablePrevious" : false})
        }

        if (currentPosition >= this.props.inputs.length - 1) {
            this.setState({"disableNext" : true})
        }

        return currentPosition
    }

    previous() {

        let currentPosition = this.state.positionNavigation - 1;

        if (currentPosition > 0 && this.props.inputs[currentPosition - 1].type == "select" || currentPosition > 0 && this.props.inputs[currentPosition - 1].type == "checkbox") {
            let value = this.storage.getItem(this.props.inputs[currentPosition - 1].id)

            if (value.includes(',')) {
              let valueArray = value.split(',')

              valueArray.forEach(function(e) {
                if (e == 1) {
                  value = 1
                }
              })
            }

            if (value != 1) {
                currentPosition = currentPosition - 1;
            }
        }

        this.setState({"positionNavigation": currentPosition})

        if (currentPosition <= 0) {
            currentPosition = 0
            this.setState({"positionNavigation": 0})
            this.setState({"disablePrevious" : true})
        }

        if (currentPosition <= this.props.inputs.length - 1) {
            this.setState({"disableNext" : false})
        }

        return currentPosition
    }

    render() {
        return (
            <div>
                {this.props.inputs.length - 1 === this.state.positionNavigation ?
                    <button className="ActionsButtonsPrimary"  onClick={() => {
                        let value = document.getElementById(this.props.inputs[this.state.positionNavigation].id).value
                        this.storage.setItem(this.props.inputs[this.state.positionNavigation].id, value)
                        this.props.submit();
                    }}>
                       Salvar
                    </button> :
                    <button className="ActionsButtonsPrimary" disabled={this.state.disableNext} onClick={this.props.handlerNext}>
                        Avançar
                    </button>
                }

                <a className="ActionsButtonsLink" disabled={this.state.disablePrevious} onClick={this.props.handlerPrevious}>Voltar pergunta <IoMdReturnLeft /></a>
            </div>
        );
    };

}
