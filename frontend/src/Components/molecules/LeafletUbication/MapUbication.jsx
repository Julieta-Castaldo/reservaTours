import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import './MapUbication.css'

const MapUbication = () => {
    const data = {
        longitud: 51.5007292,
        latitud: -0.1246254,
        nombre: 'Londres',
        descripcion: 'Hermosa ciudad'
    }
    return (
        <MapContainer center={[data.longitud, data.latitud]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.longitud, data.latitud]}>
                <Popup>
                    {data.nombre} <br /> {data.descripcion}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapUbication;