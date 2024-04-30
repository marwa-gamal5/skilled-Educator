import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Map(props) {
    const [markers, setMarkers] = useState([]);
    const center = { lat: 0, lng: 0 };

    const onMapClick = (e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        ]);
    };

    return (
        <div style={{ width: '100%', height: '85vh' }}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                center={center}
                zoom={8}
                onClick={onMapClick}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    );
}

export default Map;
