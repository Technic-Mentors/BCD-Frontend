const mongoose = require("mongoose")
const {Schema} = mongoose

const adminSchema = new Schema({
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model("admin", adminSchema)