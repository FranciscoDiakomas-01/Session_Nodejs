const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const Secret = require("./config/sessioConfig")
const Port = require("./config/serverConfig")
const db = require("./db")
const app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.use(session({
    secret : Secret,
    saveUninitialized : false
}))

app.get("/",(req,res)=>{
    
    if(!req.session.login){
        return  res.sendFile(path.resolve(__dirname , "views" , "login.html"))
    }
    return res.sendFile(path.resolve(__dirname , "views" , "logad.html"))
})


app.post("/",(req,res)=>{
    let {name , email} = req.body
    
    //getting the only one userAdmin
    db.query("select * from users;",(err, result)=>{
        
        let AdminName = result[0].name
        let AdminEmail = result[0].email
        
        if(email == AdminEmail  && name == AdminName){
            req.session.login = true
            return res.sendFile(path.resolve(__dirname , "views" , "logad.html"))
        }else{
            return res.sendFile(path.resolve(__dirname , "views" , "login.html"))
        }

    })
})


app.listen(process.env.PORT || Port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Server Running")
})