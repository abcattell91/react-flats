import React, { component } from 'react';
import flats from '../../data/Flats';
import Flat from './Flat';

const FlatList = ({ selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map(({ lat, lng, name, imageUrl, price, priceCurrency
      }) => <Flat
        lat={lat}
        lng={lng}
        name={name}
        imageUrl={imageUrl}
        price={price}
        priceCurrency={priceCurrency}
        key={lat}
        selectFlat={selectFlat}
      />)}
    </div>
)};
export default FlatList;
