import { connect } from 'react-redux';
import Map from './Map';

const mapStateToProps = (state) => {
  return {
    longitude: state.todo.longitude,
    latitude: state.todo.latitude
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;
