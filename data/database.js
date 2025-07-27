import mysql2 from 'mysql2';

const pool = mysql2.createPool({
    host: 'localhost',
    user: "root",
    password: "Prashu@8484",
    database: 'bank',
    port: 3306,

});

const db = pool.promise();

db.query('SELECT 1')
    .then((res) => console.log("Database connected"))
    .catch(err => console.log(err));


export default db;


    


