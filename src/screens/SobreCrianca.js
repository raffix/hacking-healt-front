import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Sobre.css';


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5 className="creme">REQUISIÇÃO</h5>
          <h1>Atendimento Criança</h1>
        </header>
        <div className="SobreBody BackgroundVermelhoEscuro">
          <h2 className="App-title"><span>01</span> Sobre o Templo Amal Shriners</h2>
          <span className="creme">Conforme você deve ter lido em nosso site o Shriners International é uma fraternidade baseada em diversão, companherismo e nos princípios maçônicos de amor fraterno, auxílio e verdade. Os Estados de São Paulo, Rio de Janeiro, Paraná e Santa Catarina são atendidos pela entidade local denomidnada Templo Amal Shriners ou simplesmente Amal. Para crianças residentes nestas localidades a triagem, encaminhamento e suporte a esta criança compete ao Amal. Toda a operação Shriner é sem fins lucrativos e nenhum valor monetário é requisitado para a prestação do auxílio. O Shriners é uma entidade para maçônica e, portanto completamente pautado nos ideias maçônicos sem fazer qualquer tipo de distinção, seja étnica, credo, classe social ou orientação política. Este é o formulário para requisição de Avaliação para possível atendimento. 
          <br />É um formulário extenso que solicitará uma série de informações sobre a criança e responsáveis. Fundamental preencher este formulário com o máximo de informação, pois as informações providas servirão de base à equipe de acolhimento direcionar devidamente a requisição.
          </span>
          <p className="creme"><b>Tem ciência que o Shriners é uma entidade paramaçônica e concorda em fornecer as informações solicitadas neste formulário que serão utilizadas únca e exclusivamente para questões de triagem e encaminhamento?</b></p>
          <p className="App-intro">
              <span> <Link to="/FormularioCrianca" className="ActionsButtonsPrimary btn">Sim</Link> </span>
              <span> <Link to="/" className="ActionsButtonsPrimary btn">Não</Link> </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Sobre;