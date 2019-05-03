import React, { Component } from 'react';

export default class FormTitleComponent extends Component {
    render() {
        return (
            <div id="formTitle">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}