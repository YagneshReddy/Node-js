const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const User = require("./models/userModels")
const router = express.Router()


mongoose.connect("mongodb://localhost:27017/userdb", (err) => {
    if(err){
        throw err
    } else {
        console.log(`Connected to mongodb successfully`)
    }
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

router.get("/", (req, res) => {
    res.json("Welcome to User API")
})

router.get("/users", (req, res) => {
    User.getUsers(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })    
})

router.get("/users/:id", (req, res)=>{
    const userId = req.params.id
    User.getUserById(userId, (err, data) => {
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.post("/users", (req, res)=>{
    const user = req.body
    User.createUser(user, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/users/:id", (req, res) => {
    const userId = req.params.id
    const user = req.body
    User.updateUser(userId, user, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/users/:id", (req, res)=>{
    const userId = req.params.id

    User.deleteUser(userId, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})