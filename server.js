// const { chromium } = require('playwright');
// require('dotenv').config()
// import express from 'express';
var express = require('express');
const app = express()
require('./routes/amazon.js')(app);

const PORT = 5000

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
});