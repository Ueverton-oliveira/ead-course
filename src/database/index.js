import { sql } from 'sequelize';

export const database = new sql({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'eadcourse_development',
  username: 'eadcourse',
  password: '123456',
  define: {
    underscored: true
  }
})
