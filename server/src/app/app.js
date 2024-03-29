const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const noteRoute = require('./routers/note.router');
//Middleware
app.use(express.urlencoded()); // Biên dịch url
app.use(bodyParser.json()); // Lấy Body
app.use(morgan('dev')); // Logger error
app.use(helmet()); //
app.use(cors()); // Chia sẻ tài nguyên giữa client and server
//Database

//Router
app.use('/notes/', noteRoute);
//Handle Error

module.exports = app;
