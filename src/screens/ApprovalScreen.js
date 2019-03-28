import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselApprovalComponent from './../components/CarouselApprovalComponent'
 
class ApprovalScreen extends Component {
  render() {
    return (
      <div className="App">
        <CarouselApprovalComponent />
      </div>
    );
  }
}

export default ApprovalScreen;