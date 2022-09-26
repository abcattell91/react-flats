import react, { component } from 'react';
import flats from '../../data/Flats';
import Flat from './Flat';

const FlatList = () => {
  return (
    flats.map((element) => {
      console.log(element.imageUrl)
    })
  );
}

export default FlatList;
