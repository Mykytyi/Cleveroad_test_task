import React, {Component} from 'react';
import './Location.css';

class Location extends Component {
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
      <div className="location">
        <p className="title">ISS is now located at:</p>
        <p className="data">longitude: {longitude},</p>
        <p className="data">latitude: {latitude}</p>
      </div>
    );
  }
}

export default Location;