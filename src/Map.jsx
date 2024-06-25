import React, { useState } from 'react';
import * as d3 from 'd3';
import regionMapping from './regionMapping';
import axios from 'axios';
import LocationsTable from './Components/LocationsTable.jsx'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Map = ({ width, height, data }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [tableShow, setTableShow] = useState(false)
    const handleCountryClick = (name) => {
        console.log(name);
        setSelectedCountry(name);

    };
    const countries = regionMapping
    const handleCloseTable = () => {
        setSelectedCountry(null); // Clear selected country to hide table
    };
    const getRegionCode = (countryName) => {
        return regionMapping[countryName] || "Unknown";
    };
    const getColorForRegion = (regionCode) => {
        const colorCodes = {
            "EUR": "#C39975",   // Tan
            "FRA": "#ff7900",   // Orange
            "IMEAR": "#026131", // Green
            "LAM": "#472C8E",   // Purple
            "NAM": "#FFCB00",   // Yellow
            "APAC": "#015DBE",  // Blue
            "None": '#4A4A4A'
        };
        return colorCodes[regionCode] || '#4A4A4A'; // Default to grey if no match found
    };
    const projection = d3
        .geoMercator()
        .scale(width / 2 / Math.PI - 60)
        .center([-65, 50]);

    const geoPathGenerator = d3.geoPath().projection(projection);
    const allSvgPaths = data.features
        .map((shape) => {
            const regionCode = getRegionCode(shape.properties.name);

            // Determine color based on region code
            const fillColor = regionCode ? getColorForRegion(regionCode) : 'grey';
            return (
                <path
                    key={shape.id}
                    d={geoPathGenerator(shape)}
                    stroke="lightGrey"
                    strokeWidth={0.5}
                    fill={fillColor}
                    fillOpacity={0.85}
                    onClick={() => handleCountryClick(shape.properties.name)}
                    style={{ cursor: 'pointer' }}
                />
            );
        });

    return (

        <section className='flex flex-row flex-wrap justify-center'>

            <div >
                <svg width={width} height={height} >
                    {allSvgPaths}
                </svg>
                
                <DropdownButton id="dropdown-basic-button" title="Choose Country">
                    
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

                {selectedCountry && (
                    <LocationsTable name={selectedCountry} onClose={handleCloseTable} />

                )}
            </div>
        </section>

    );
};

export default Map;