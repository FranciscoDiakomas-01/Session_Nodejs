const express = require('express')
const session = require('express-session')
const path = require('path')

const Port = require("./config/serverConfig")
const exp = require('constants')
const db = require("./db")

const app = express()



app.listen(process.env.PORT || Port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Server Running")
})