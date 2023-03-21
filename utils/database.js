import { Sequelize } from 'sequelize';
import { CONFIG_DB } from '../config.js';

const dbconfig = CONFIG_DB.DB;
const sequelize = new Sequelize(...dbconfig);

export default sequelize;
