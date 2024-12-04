import React, { useState } from 'react';

function CrimeReportForm() {
  const [crimeType, setCrimeType] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const crimeReport = {
      crimeType,
      description,
      latitude,
      longitude,
    };

    fetch('YOUR_API_URL_HERE/crime', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crimeReport),
    })
      .then(response => response.json())
      .then(data => alert('Crime report submitted successfully!'))
      .catch(error => console.error('Error submitting crime report:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Crime Type:
        <input
          type="text"
          value={crimeType}
          onChange={(e) => setCrimeType(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Latitude:
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </label>
      <label>
        Longitude:
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </label>
      <button type="submit">Submit Crime Report</button>
    </form>
  );
}

export default CrimeReportForm;
