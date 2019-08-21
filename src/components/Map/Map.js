import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

export default function Map(props) {
  return (
    <div>
      <GoogleMap defaultZoom={2} defaultCenter={{lat: +props.latitude, lng: +props.longitude}}>
        <Marker position={{lat: +props.latitude, lng: +props.longitude}}/>
      </GoogleMap>
    </div>
  );
}

//AIzaSyCe-uJyatwNz62d2NbgV25ArN0AzIdYiFw