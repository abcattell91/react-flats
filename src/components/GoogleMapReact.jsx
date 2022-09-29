import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  );
}
