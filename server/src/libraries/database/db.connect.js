const mysql = require('mysql2');
const dbConfig = require('../../configs/db.config');

const connectMysql = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connectMysql.connect(function (err) {
  if (err) throw err;
  console.log('connect successfully');
});
module.exports = connectMysql;
