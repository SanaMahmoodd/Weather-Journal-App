const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('website'));

// App API Endpoint
let projectData = {};

// GET Route: Returns the projectData object
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST Route: Updates the projectData object with new data
app.post('/add', (req, res) => {
    projectData = { ...req.body }; // Replace or update projectData
    res.send({ message: 'Data added successfully', projectData });
});

// Fallback route for undefined routes
app.use((req, res) => {
    res.status(404).send("Route not found");
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});