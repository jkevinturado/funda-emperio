import dotenv from 'dotenv';
dotenv.config();

export const CONFIG_DB = {
  DB: [
    process.env.DB_NAME_DEV,
    process.env.DB_USER_DEV,
    process.env.DB_PASSWORD_DEV,
    {
      logging: false,
      dialect: process.env.DB_DIALECT_DEV,
      host: process.env.DB_HOST_DEV,
    },
  ],
};
