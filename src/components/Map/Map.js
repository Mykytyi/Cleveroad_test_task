import React, {Component} from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: ''
    }
  }
  componentDidMount() {
    this.requestForData();
    setInterval(() => this.requestForData(), 5000);
  }

  requestForData() {
    const promise = fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json');

    promise.then(response => response.text())
      .then(result => {
        return JSON.parse(result);
      })
      .then(obj => {
        let lon = obj.iss_position.longitude;
        let lat = obj.iss_position.latitude;
        this.setState({
          longitude: lon,
          latitude: lat
        });
        return true;
      });
  }

  render() {
    const { longitude, latitude } = this.state;
    return (
    <div>{
      longitude &&
      <GoogleMap defaultZoom={4} defaultCenter={{lat: +latitude, lng: +longitude}}>
        <Marker position={{lat: +latitude, lng: +longitude}}/>
      </GoogleMap>
    }
    </div>
    )
  }
}

export default Map;
// export default function Map(props) {
//   return (
//     <div>
//       <GoogleMap defaultZoom={2} defaultCenter={{lat: +props.latitude, lng: +props.longitude}}>
//         <Marker position={{lat: +props.latitude, lng: +props.longitude}}/>
//       </GoogleMap>
//     </div>
//   );
// }

//AIzaSyCe-uJyatwNz62d2NbgV25ArN0AzIdYiFw