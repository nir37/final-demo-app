const express = require('express')
const cors = require("cors");
const routerStudent = require("./routes/Routes");


const app = express()


app.use(cors('*'));

app.use(express.json());

app.use("/Routes", routerStudent);



// app.get('/',(request, response)=>{
//     response.send('Welcome to the backend')
// })

// app.get('/test',(request, response)=>{
//     response.send('new test api')
// })

app.listen(4000,()=>{
    console.log(`server started on port 4000`)
})