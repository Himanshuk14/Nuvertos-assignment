module.exports = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "101903007Hi#",
  database: process.env.MYSQL_DATABASE || "nuvertosCompoundsDB",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || "3306",
  dialect: "mysql",
};


