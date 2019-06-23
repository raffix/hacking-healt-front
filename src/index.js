import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Inicial from './screens/Inicial';
import SobreCrianca from './screens/SobreCrianca';
import SobreMateriais from './screens/SobreMateriais';
import FormularioCrianca from './screens/FormularioCrianca';
import FormularioMateriais from './screens/FormularioMateriais';
import ApprovalScreen from './screens/ApprovalScreen';
import FormularioProfissional from './screens/FormularioProfissional';
import MinhasSolicitacoes from './screens/MinhasSolicitacoes';
import FormularioProfissionalPreview from './screens/FormularioProfissionalPreview'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Inicial" component={Inicial} />
            <Route path="/FormularioCrianca" component={FormularioCrianca} />
            <Route path="/FormularioMateriais" component={FormularioMateriais} />
            <Route path="/SobreCrianca" component={SobreCrianca} />
            <Route path="/SobreMateriais" component={SobreMateriais} />
            <Route path="/SobreMateriais" component={SobreMateriais} />
            <Route path="/ApprovalScreen" component={ApprovalScreen} />
            <Route path="/FormularioProfissional/:id" component={FormularioProfissional} />
            <Route path="/FormularioProfissional" component={FormularioProfissional} />
            <Route path="/MinhasSolicitacoes" component={MinhasSolicitacoes} />
            <Route path="/FormularioProfissionalPreview/:id" component={FormularioProfissionalPreview} />
            <Route path="/FormularioProfissionalPreview" component={FormularioProfissionalPreview} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
