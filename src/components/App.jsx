import React, { Component } from 'react';
import FlatList from './FlatList';
import Flat from './Flat';


class App extends Component {
  render () {
    return (
      <div>
        <div><FlatList /></div>
        <div><Flat /></div>
      </div>
    )
  }
}

export default App;
