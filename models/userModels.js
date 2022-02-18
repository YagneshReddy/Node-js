const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
    
})
//}, {versionKey: false})

const User = module.exports = mongoose.model('users', userSchema, 'users')


module.exports.getUsers = function(callback){
    User.find(callback)
}

module.exports.getUserById = function(userid, callback){
    User.findById({_id: userid}, callback)
}

module.exports.createUser = function(user, callback){
    User.create(user, callback)
}

module.exports.updateUser = function(userId, user, callback){
    User.updateOne({_id: userId}, user, callback)
}

module.exports.deleteUser = function(userId, callback){
    User.deleteOne({_id: userId}, callback)
}
