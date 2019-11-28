const express = require("express")
const db = require('../db')
const employeeRouter = express.Router();

employeeRouter.get("/",(request,response)=>{
    const connection = db.connect()
    const sql = `select id,name,email,address from employee`
    connection.query(sql,(err,result)=>{
        connection.end()
        if(err==null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err))
        }
    })

})

employeeRouter.post("/",(request,response)=>{
    const {name,email,address} = request.body;
    const connection = db.connect()
    const sql = `insert into employee (name,email,address) values ('${name}','${email}','${address}')`
    connection.query(sql,(err,result)=>{
        connection.end()
        if(err==null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err))
        }
    })

})

employeeRouter.put("/:id",(request,response)=>{
    const id = request.params.id;
    const {name,email,address} = request.body;
    const connection = db.connect()
    const sql = `update employee name='${name}',email='${email}',address='${address}' where id=${id}`
    connection.query(sql,(err,result)=>{
        connection.end()
        if(err==null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err))
        }
    })

})

employeeRouter.delete("/:id",(request,response)=>{
    const id = request.params.id;
   
    const connection = db.connect()
    const sql = `delete from employee  where id=${id}`
    connection.query(sql,(err,result)=>{
        connection.end()
        if(err==null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err))
        }
    })

})

module.exports = employeeRouter;