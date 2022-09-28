import React, { Component } from 'react';

class Flat extends Component {
	render () {
    return (
      <div className="card" style={{backgroundImage: `linear-gradient(
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

// const Flat = () => {
//   return (
//     <div className="card">
//       <div className="card-category">150 EUR</div>
//         <div className="card-description">
//           <h2>Super 60m2 in trendy neighborhood!</h2>
//         </div>
//         <a className="card-link" href="#"></a>
//     </div>
//   );
// };

export default Flat;
