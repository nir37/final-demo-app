// const mysql = require('mysql')

// const openConnection = () => {
//   const connection = mysql.createConnection({
//     port: 3306,
//     host: 'dbservice',
//     user: 'root',
//     password: 'manager',
//     database: 'mydb',
//   })

//   connection.connect()

//   return connection
// }

// module.exports = {
//   openConnection,
// }


const mysql = require('mysql2')

// connection pool
// which will be used for opening/closing connection(s) with mysql
const pool = mysql.createPool({
  // the database will run in a container with logical name as demodb
  host: 'dbservice',

  user: 'root',
  password: 'manager',
  database: 'mydb',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool
