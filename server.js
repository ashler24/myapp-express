const express = require("express");
const empRouter = require("./routes/employee")

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
    next();
})

app.use(express.json());
app.use("/emp",empRouter);

app.listen(9898, '0.0.0.0',()=>{
    console.log('server statrted on 9898....')
})
