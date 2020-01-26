import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const divStyle = {
  height: "100%",
  width: "100%"
};

const popup = {
  "font-size": "14px"  
}
const popupSubject = {
  "fontWeight": "bold"
}
function SingleHistoricEventDetailsView(props) {
  const {event} = {...props};
  return (
    event.location
    ?
      <LeafletMap style={divStyle}
              center={event.location}
              zoom={13}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              easeLinearity={0.35}
              >
              <TileLayer
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
                  <Marker position={
                      event.location
                  }>
                      <Popup style={popup}>
                        <span style={popupSubject}>{event.subject}:</span> {event.description}                        
                      </Popup>                            
                  </Marker>

          </LeafletMap>

    : <>
      </>
  );
}

export default SingleHistoricEventDetailsView;        