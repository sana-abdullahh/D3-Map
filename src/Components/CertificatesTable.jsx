import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const CertificatesTable = ({certificates,onClose})=>{
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        if (certificates && certificates.length > 0) {
            setRowData(certificates); // Update rowData when certificates prop changes
        }
    }, [certificates]);
    const columnDefs= [
    {headerName: "Certificate", field: "name"},
    {headerName: "Details", field:"details"},
    {headerName: "Expiry Date", field:"expiryDate"}
    ]

    return(
        <div className="ag-theme-quartz "  style={{ height: '500px', width: '90%',alignItems:'center'  }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
       />
       <button onClick={onClose}className='mt-10 ml-2.5'>Close</button>
       </div>
    );
};
export default CertificatesTable;