import React, { Component } from 'react';

class Flat extends Component {
	render () {
    return (
      <div className="card">
        <div className="card-category">{}</div>
          <div className="card-description">
          {}
          </div>
      </div>
    )
  }
};

export default Flat;
