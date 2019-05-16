import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselApprovalComponent from './../components/CarouselApprovalComponent'

class ApprovalScreen extends Component {

  render() {
    return (
      <div className="App">
        <div className="breadcrumbs">
          <Link className="linkBreadCrumb" to="/Inicial">Home</Link> /
          <a>Aprovações</a>
        </div>
        <CarouselApprovalComponent />
      </div>
    );
  }
}

export default ApprovalScreen;
