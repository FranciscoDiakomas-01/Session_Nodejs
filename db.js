const mysql = require('mysql')
const dbConfig = require("./config/dbCofig")

const db = mysql.createConnection({
    host : process.env.DBHost || dbConfig.dbHost,
    user : process.env.DBUser|| dbConfig.dbUser ,
    database : process.env.DBName || dbConfig.database,
    password : process.env.DBPass || dbConfig.dbPass
})

db.connect((err)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log("connected to db")
})

module.exports = db