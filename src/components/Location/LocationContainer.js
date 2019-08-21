import { connect } from 'react-redux';
import Location from './Location';

function changeData(lng, lat) {
  return {
    type: 'ChangeData',
    latitude: lat,
    longitude: lng
  }
}


const mapStateToProps = (state) => {
  return {
    longitude: state.todo.longitude,
    latitude: state.todo.latitude
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeData: (lon, lat) => dispatch(changeData(lon, lat))
  };
};

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location);

export default LocationContainer;