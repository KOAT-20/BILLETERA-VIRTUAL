const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// require('./config/auth.js');
// Settings
app.set('port', process.env.PORT || 5000);
// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.get('/', (req, res) => res.send('Servidor de Wallet Virtual'));

module.exports = app;
