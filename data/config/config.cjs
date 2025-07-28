const path = require("path");
require("dotenv").config({ path: path.join(process.cwd(), "data/config.env") });

module.exports = {
  development: {
    username: process.env.DB_USER || "cms_user",
    password: process.env.DB_PASSWORD || "Cms@1234",
    database: process.env.DB_NAME || "cms_db",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
