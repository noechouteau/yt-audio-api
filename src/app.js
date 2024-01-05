// src/app.js
const express = require('express');
const app = express();
const audioRouter = require('./routes/audio');

app.use('/', audioRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
