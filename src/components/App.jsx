import React, { Component } from 'react';
import FlatList from './FlatList';
import Flat from './Flat';


class App extends Component {
  render () {
    return (
      <div>
        <div className="flat-list"><FlatList /></div>
      </div>
    )
  }
}

export default App;
