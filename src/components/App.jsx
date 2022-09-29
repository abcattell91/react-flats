import React, { Component } from 'react';
import FlatList from './FlatList';
import GoogleMapReact from './GoogleMapReact';
import Marker from './Marker';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: null,
    };
    this.selectFlat = this.selectFlat.bind(this);
  }

  selectFlat(lat) {
    this.setState({
      selectedFlatLat: lat
    });
  }

  render () {
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact />
        </div>
        <div className="marker">
          <Marker lat={this.state.selectedFlatLat}/>
        </div>
      </div>
    );
  }
}

export default App;
