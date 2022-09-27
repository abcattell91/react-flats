import React, { Component } from 'react';

class Flat extends Component {
	render () {
    const img = `${this.props.imageUrl}`
    return (
      <div className="card" style={{backgroundImage: `url('${img}')`}}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
          <div className="card-description">
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
