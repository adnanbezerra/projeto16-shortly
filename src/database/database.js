import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const databaseConfig = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123456',
  database: 'projeto_x'
}

const connection = new Pool(databaseConfig);

export default connection;