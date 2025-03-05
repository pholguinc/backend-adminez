import * as mysql from 'mysql2/promise';
import { envs } from './index';

export const createMysqlConnection = async () => {
  const connection = await mysql.createConnection({
    host: envs.DB_HOST,
    user: envs.DB_USER, 
    password: envs.DB_PASSWORD, 
    database: envs.DB_DATABASE,
  });

  return connection;
};
