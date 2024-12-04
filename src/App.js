import React, { useEffect, useState } from 'react';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet'
import './App.css';

function App() {
  const [crimeData, setCrimeData] = useState([]);

  //useEffect(() => {
    //fetch('YOUR_API_URL_HERE/crime')
      //.then(response => response.json())
      //.then(data => setCrimeData(data));
  //}, []);

  return (
    <div className="App">
      <h1>Signal - Crime Map in Nigeria</h1>

    </div>
  );
}

export default App;

