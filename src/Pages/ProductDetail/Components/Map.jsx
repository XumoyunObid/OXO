import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMapComponent = ({ apiKey }) => {
  return (
    <div style={{ height: "123px", width: "343px", borderRadius: "8px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 41.311081, lng: 69.240562 }}
        defaultZoom={11}
      >
        {/* You can add markers, overlays, or other components here */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapComponent;
