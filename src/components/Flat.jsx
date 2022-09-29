import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.lat, this.props.lng);
    }
    this.setState({
      clicked: !this.state.clicked
    });
  };

	render () {
    return (
      <div className={this.state.clicked ? 'card active' : 'card'} onClick={this.handleClick} style={{backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)),
        url('${this.props.imageUrl}')`}}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
          <div className="card-description" >
            <h2>{this.props.name}</h2>
          </div>
          <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
