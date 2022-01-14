const express = require("express");
const db = require("../db");
const utils = require("../utils");

const router = express.Router();

router.post("/addEmpDetails", (request, response) => {
  const { name, salary, age } = request.body;

//   const connection = db.openConnection();

  const query = `insert into User values
    ('0','${name}', '${salary}','${age}')`;

//   connection.query(addStatement, (error, result) => {
//     if (error) {
//       connection.end();10
//       response.send(utils.createResult(error));
//     } else {
//       connection.end();
//       response.send(result);
//     }
//   });

db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
});

router.post('/updateDetails/:id', (request, response) => {
  const { id } = request.params
  const { salary, age } = request.body

  const query = `
    UPDATE User
    SET
      salary = '${salary}', 
      age = '${age}'
    WHERE
      empid = ${id}
  `
  db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
});

router.post("/showAllEmps", (request, response) => {
//   const connection = db.openConnection();

  // const key = request.params.id;

  const query = `select * from User`;

//   connection.query(carStatement, (error, result) => {
//     if (error) {
//       connection.end();
//       response.send(utils.createResult(error));
//     } else {
//       connection.end();
//       response.send(result);
//     }
//   });

db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
});

router.post("/deleteEmp/:id", (request, response) => {
//   const connection = db.openConnection();

  const key = request.params.id;

  const query = `delete from User where empid= '${key}'`;

//   connection.query(deleteStatement, (error, result) => {
//     if (error) {
//       connection.end();
//       response.send(utils.createResult(error));
//     } else {
//       connection.end();
//       response.send(result);
//     }
//   });

db.execute(query, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


module.exports = router;
