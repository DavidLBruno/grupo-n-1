require('dotenv').config()

module.exports = {
  development: {
    production:process.env.NODE_ENV==="production",
    development:process.env.NODE_ENV==="development",
    jwtSecret: process.env.JWT_SECRET,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    
  },
  production: {
    production:process.env.NODE_ENV==="production",
    development:process.env.NODE_ENV==="development",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    jwtSecret:process.env.JWT_SECRET,
    dialect: 'mysql',
  },
}
