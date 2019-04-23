
import React, { Component } from 'react';
import LogoAmal from './images/logo.png';
import ImagemCrianca from './images/Crianca.png';
import { Link } from 'react-router-dom';

import './styles/App.css';
import './styles/NavigationFormStyle.css';
import './styles/ActionsButtonsStyle.css';
import './styles/InputTextStyle.css';

import Login from './screens/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;