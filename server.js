const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle the POST request
app.post('/super-admin-data.json/consumers', (req, res) => {
  const jsonData = JSON.stringify(req.body);
  fs.writeFile('super-admin-data.json', jsonData, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ message: 'Error saving data' });
    } else {
      console.log('Data saved successfully!');
      res.json({ message: 'Data saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
