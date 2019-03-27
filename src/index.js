import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import SobreCrianca from './screens/SobreCrianca';
import SobreMateriais from './screens/SobreMateriais';
import FormularioCrianca from './screens/FormularioCrianca';
import FormularioMateriais from './screens/FormularioMateriais';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/FormularioCrianca" component={FormularioCrianca} />
            <Route path="/FormularioMateriais" component={FormularioMateriais} />
            <Route path="/SobreCrianca" component={SobreCrianca} />
            <Route path="/SobreMateriais" component={SobreMateriais} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
