import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.030091,
      lng: -91.955039
    },
    zoom: 10
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA4mVYmEkUpB1roDC6NBC2mpQey-PFr2Jg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.040091}
            lng={-91.955039}
            text={'Ward Animal Shelter'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
