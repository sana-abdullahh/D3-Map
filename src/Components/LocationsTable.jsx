import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import axios from 'axios';
import CertificatesTable from './CertificatesTable';

const LocationsTable = ({name,onClose})=>{
    const [rowData, setRowData] = useState([]);
    const [selectedLocation, setSelectedLocation]=useState(null);
    const handleCloseCertificate = () => {
        setSelectedLocation(null);
    };
    useEffect(()=>{
        axios.get(`http://localhost:5000/country/${name}`) // Adjust URL based on your backend server URL
        .then(response => {
            console.log('Country Data:', response.data);
            const { campuses } = response.data;
            const parsedData = campuses.flatMap(campus =>
                    campus.addresses.map(address => ({
                        campus: campus.name,
                        location: address.name,
                        certificates: address.certificates
                    }))
                );
                setRowData(parsedData);
                setSelectedLocation(null); 
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
                setRowData([]);
                setSelectedLocation(null);
            });

    },[name]);
    const handleRowClick = (event) => {
        const selectedRow = event.data; // Access the row data object
        setSelectedLocation(selectedRow); // Set selected location for displaying certificates
        console.log(selectedRow);
    };
    const columnDefs= [
    {headerName: "Campus", field: "campus"},
    {headerName: "Location", field:"location"},
    {headerName: "Actions", field:"action"}
    ]

    return(
        <div className="ag-theme-quartz" style={{ height: '500px', width: '90%',alignItems:'center'  }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onRowClicked={handleRowClick}
       />
       <button onClick={onClose} className='ml-2.5 my-10'>Close</button>
       {
       selectedLocation && (
                <CertificatesTable certificates={selectedLocation.certificates} onClose={handleCloseCertificate}/>
            )}
       </div>
    );
};
export default LocationsTable;