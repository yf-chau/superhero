const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const logger = require('morgan');

app.use(cors());
app.use(logger('dev'));

app.get('/api/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(`https://superheroapi.com/api/10227237697881031/${id}`);
  res.json(response.data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
