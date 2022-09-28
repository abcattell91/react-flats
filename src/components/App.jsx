import React, { Component } from 'react';
import FlatList from './FlatList';
import GoogleMapReact from './GoogleMapReact';


class App extends Component {
  render () {
    return (
      <div>
        <div className="flat-list"><FlatList /></div>
        <div className="map-container"><GoogleMapReact />Test</div>
      </div>
    )
  }
}

export default App;
