const express = require("express")
const app = express()
const Router =  require("./Router/Router")
const cors = require('cors')

//引入数据库
require("./config/db.config")

//配置解析post参数的-不用下载第三方 ,内置
app.use(express.urlencoded({extended:false})) //post参数- username=kerwin&password=1234
app.use(express.json()) //post参数- {name:"",age:100}

//跨域
app.use(cors())

//引入
app.use("/api",Router)

app.listen(3000,()=>{
    console.log("server start")
})