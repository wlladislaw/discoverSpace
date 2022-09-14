import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Past() {
  const [inputValue, setInputValue] = useState('');
  const [getdata, setData] = useState();
  useEffect(() => {
    if (inputValue) {
      setInputValue(inputValue.toUpperCase());
    }
  }, [inputValue]);
  async function getData() {
    try {
      await axios({
        url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
        headers: {
          'Content-type': 'application/json',
        },
        params: {
          date: inputValue,
        },
        method: 'GET',
        data: null,
      }).then(({ data }) => setData(data));
    } catch (error) {
      console.log('OOOPS', error);
    }
  }

  return (
    <>
      <NavBar />
      <div className="past">
        <h1>Space picture : </h1>
        <input
          style={{ height: '30px' }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a date-YYYY-MM-DD"
        />
        <div>
          <button
            className="searchButton"
            disabled={inputValue.length === 0}
            onClick={() => getData()}
            style={{ backgroundColor: 'orange', cursor: 'pointer' }}
            type="submit"
          >
            Search
          </button>
        </div>
        {getdata && (
          <div className="nasa-photo">
            <div>
              <h1>{getdata.title}</h1>
            </div>
            <img src={getdata.url} alt={getdata.title} />
            <p> {getdata.date} </p>
            <div className="explanation">
              <p> {getdata.explanation} </p>
            </div>
            <p> {getdata.copyright} </p>
          </div>
        )}
      </div>
    </>
  );
}
