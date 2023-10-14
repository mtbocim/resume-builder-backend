const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.NODE_ENV === 'test' ? process.env.TEST_DB : process.env.REAL_DB,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

sequelize.sync({ force: false }) // Set to true to force recreate the database
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

export default sequelize;