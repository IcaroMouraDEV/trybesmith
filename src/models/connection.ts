import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;