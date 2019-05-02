import React, { Component } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';

export default class LoginValidate extends Component {
    
    constructor(props) {
        super(props);
        let token = window.localStorage.getItem('token');
        this.redirect = false;
        console.log(token)
        if(token === null)
            window.location = '/';
    }
}