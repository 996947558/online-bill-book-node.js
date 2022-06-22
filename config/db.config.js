const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.kca83.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.once('open',()=>{
    console.log('数据库连接成功……')
})
