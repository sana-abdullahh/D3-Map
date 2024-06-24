import './App.css';
import React, { useState, useEffect } from 'react';
import Map from './Map';
import {data} from './data.js'

function App() {
  
  return (
    <Map width={1000} height={500} data={data} />
  );
}

export default App;
