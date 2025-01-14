const express = require('express');
const morgan = require('morgan');

const errorController = require('./controllers/error');
const router = require('./routes');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');


const app = express();

// Using middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// app.use((req, res, next) => {
// 	req.requestTime = dayjs().format();
// 	next();
// });
app.use(router);

app.use(errorController.onLost);
app.use(errorController.onError);

module.exports = app;
