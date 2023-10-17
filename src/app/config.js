import { Sequelize } from "sequelize"
import * as pg from 'pg';
import { config } from "dotenv";
config()


const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const sequelize = new Sequelize(process.env.DB, {
    dialect: 'postgres',
    dialectModule: pg,
    host: 'localhost',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
});

async function testDB(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
testDB();

export {SECRET_KEY, sequelize};