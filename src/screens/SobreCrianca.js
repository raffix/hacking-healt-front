import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router-dom'


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span>01</span> Sobre o Templo Amal Shriners</h1>
          <p>Conforme você deve ter lido em nosso site o Shriners International é uma fraternidade baseada em diversão, companherismo e nos princípios maçônicos de amor fraterno, auxílio e verdade. Os Estados de São Paulo, Rio de Janeiro, Paraná e Santa Catarina são atendidos pela entidade local denomidnada Templo Amal Shriners ou simplesmente Amal. Para crianças residentes nestas localidades a triagem, encaminhamento e suporte a esta criança compete ao Amal. Toda a operação Shriner é sem fins lucrativos e nenhum valor monetário é requisitado para a prestação do auxílio. O Shriners é uma entidade para maçônica e, portanto completamente pautado nos ideias maçônicos sem fazer qualquer tipo de distinção, seja étnica, credo, classe social ou orientação política. Este é o formulário para requisição de Avaliação para possível atendimento. 
          É um formulário extenso que solicitará uma série de informações sobre a criança e responsáveis. Fundamental preencher este formulário com o máximo de informação, pois as informações providas servirão de base à equipe de acolhimento direcionar devidamente a requisição.</p><p><b>Tem ciência que o Shriners é uma entidade paramaçônica e concorda em fornecer as informações solicitadas neste formulário que serão utilizadas únca e exclusivamente para questões de triagem e encaminhamento?</b></p>
        </header>
        <p className="App-intro">
          <Link to="/">Ir para a página home \o/</Link>
        </p>
      </div>
    );
  }
}

export default Sobre;