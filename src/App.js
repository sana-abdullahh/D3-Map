import './App.css';
import React, { useState, useEffect } from 'react';
import Map from './Map';
import { data } from './data.js'

function App() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Map width={1450} height={650} data={data} />
    </div>
    
  );
}

export default App;
