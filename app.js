import dotenv from 'dotenv';
import express from 'express';
import bodyparser from 'body-parser';

import db from './models/index.js';
import dbConn from './utils/database.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(bodyparser.json());
app.use('/api/', userRoute);

//error handling
app.use((error, req, res, next) => {
  res
    .status(error.status)
    .json({
      message: error.message,
      errorDetails: error.errorDetails || error,
    });
});

try {
  app.listen(process.env.PORT || 4001);
} catch (error) {}
