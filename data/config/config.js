import dotenv from 'dotenv';
dotenv.config({
    path:"../config.env"
});

export default{
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Prashu@8484',
    database: process.env.DB_NAME || 'cms_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
