import React from 'react';
import { useParams } from 'react-router-dom';

function SeriesDetails() {
  const { id } = useParams(); 
  return (
    <div>
      <h1>{id.replace('-', ' ')}</h1> {/* Dynamically display the series name */}
      <p>Details about {id.replace('-', ' ')}</p>
    </div>
  );
}

export default SeriesDetails;
