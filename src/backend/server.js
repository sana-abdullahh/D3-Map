const express = require('express');
const app = express();
const cors = require('cors'); // Import CORS middleware

const PORT = process.env.PORT || 5000;

app.use(cors());

// Define routes and middleware here...

const data = {
    Egypt: {
        campuses: [
            {
                name: "Campus A",
                addresses: [
                    {
                        name: "Address A1",
                        certificates: [
                            { name: "Certificate A1", details: "Details A1", expiryDate: "2024-12-31" },
                            { name: "Certificate A2", details: "Details A2", expiryDate: "2023-06-30" }
                        ]
                    },
            {
                name: "Address A2",
                certificates: [
                  { name: "Certificate A3", details: "Details A1", expiryDate: "2024-12-31" },
                  { name: "Certificate A4", details: "Details A2", expiryDate: "2023-06-30" }
                ]
            },
            
            // Add more addresses as needed
          ]
        },
        // Add more campuses as needed
    ]
},
    India:{
        campuses:[
            {
            name:"Camp5",
            addresses: [
                {
                    name:"Address A5",
                    certificates:[
                        {name: "C6",details:"d6",expiryDate:"2024-12-19"}
                    ]
                }
            ]
        }
        ]
    
    }
// Add more countries as needed
};

// Route to fetch data for a specific country
app.get('/country/:countryName', (req, res) => {
    const countryName = req.params.countryName;
    const countryData = data[countryName];
    if (countryData) {
        res.json(countryData);
    } else {
        res.status(404).json({ error: "Country not found" });
    }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});