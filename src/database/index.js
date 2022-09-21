import { sequelize } from 'sequelize';

export const database = new sequelize({
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
