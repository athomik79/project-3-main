const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

app.use(express.json());

// Connect ot Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  // Use Routes
  app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
