import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import './MapUbication.css'

const MapUbication = ({ ciudad, userLocation }) => {
    let longitud = ciudad && ciudad.longitud ? ciudad.longitud.toString() : 0;
    let latitud = ciudad && ciudad.latitud ? ciudad.latitud.toString() : 0;
    
    return (
        <>
            {ciudad && longitud !== 0 && latitud !== 0 ?
                <MapContainer center={[latitud, longitud]} zoom={15} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitud, longitud]}>
                        <Popup>
                            {ciudad?.nombreCiudad} <br /> {ciudad?.descripcionCiudad}
                        </Popup>
                    </Marker>
                    {userLocation && <Polyline positions={[[latitud,longitud], userLocation]} />}
                </MapContainer> :
                <p style={{ marginLeft: '50px', color: '#58C1CE' }}>Lo sentimos. Actualmente no podemos mostrarte la ubicación de este tour en el mapa.</p>
            }
        </>
    )
}

export default MapUbication;