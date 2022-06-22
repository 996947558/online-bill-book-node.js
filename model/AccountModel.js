const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AccountType = {
    name:String,
    number:Number,
}
const AccountModel = mongoose.model("account",new Schema(AccountType,{ timestamps:true }))

module.exports = AccountModel