// Em caso de erro relacionado ao não cadastro de senha no mysql:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "SENHA";

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log(`Connected to database ${process.env.DB_NAME}`);
});

module.exports = connection;