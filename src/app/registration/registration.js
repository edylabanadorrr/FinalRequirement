const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ionic-batelec'
});

// Connect to MySQL
connection.connect();
app.use(express.json());
app.use(cors());
  
// Handle registration route
app.post('/registration', (req, res) => {
  const { FirstName, LastName, AccountNumber, Username, Password } = req.body;
  const query = 'INSERT INTO consumertable (FirstName, LastName, AccountNumber, Username, Password) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [FirstName, LastName, AccountNumber, Username, Password], (error, results, fields) => {
    if (error) {
      console.error('Registration failed:', error);
      res.status(500).send('Registration failed');
    } else {
      console.log('Registration successful');
      res.status(200).send('Registration successful');
    }
  });
});
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

