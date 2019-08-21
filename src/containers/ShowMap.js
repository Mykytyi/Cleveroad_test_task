import React, {Component} from 'react';
import LocationContainer from '../components/Location/LocationContainer';
import CurrentTime from '../components/CurrentTime/CurrentTime';
import MapContainer from '../components/Map/MapContainer';
import Crew from '../components/Crew/Crew';
import { withScriptjs, withGoogleMap } from 'react-google-maps';

import './ShowMap.css';

const WrappedMap = withScriptjs(withGoogleMap(MapContainer));

class ShowMap extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <div className="showMap-wrapper">
            <LocationContainer/>
            <CurrentTime/>
            <WrappedMap
              googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA8OJeRiEf959PDJkE60mjI54YSrdNlitk'}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}/>
            <Crew/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowMap;