// Create web server 

// 1. Import Express
const express = require('express');

// 2. Create an instance of Express
const app = express();

// 3. Create a port
const port = 3000;

// 4. Create a route
app.get('/', (request, response) => {
    response.send('Welcome to my API');
});

// 5. Listen to port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});