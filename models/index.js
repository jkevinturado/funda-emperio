import { Sequelize } from 'sequelize';

import dbConn from '../utils/database.js';
import userModel from './userModel.js';

const db = {};
db.Sequelize = Sequelize;
db.sequelize = dbConn;

db.sequelize
  .sync({ alter: true })
  //   .sync()
  .then(() => {
    console.log('Database Sync');
  })
  .catch((err) => {
    const error = new Error('Database Sync Error');
    // console.log('error ', err);
    error.statusCode = 501;
    error.errorDetails = [{ msg: err }];
    throw error;
  });

export default db;
