// const { chromium } = require('playwright');
// require('dotenv').config()
const express = require('express')
const app = express()
require('./routes/amazon')(app);

const PORT = 5000

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
});