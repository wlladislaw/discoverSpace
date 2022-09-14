import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaContent() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      );
      const data = await res.json();
      setPhotoData(data);
    }
    fetchPhoto();
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div className="today">
        <div className="nasa-photo">
          <div>
            <h1>{photoData.title}</h1>
            <img src={photoData.url} alt={photoData.title} />
            <p> {photoData.date} </p>
            <div className="explanation">
              <p> {photoData.explanation} </p>
            </div>
            <p> {photoData.copyright} </p>
          </div>
        </div>
      </div>
    </>
  );
}
