const express = require('express')
const app = express()
const users = require('../user.json')

app.get("/", function(req, res){
    console.log(req.url)
    res.send("Welcome to the world of NodeJS")
})

app.get("/student", function(req, res){
    console.log(req.url)
    var students = [
        {
            name: "scott",
            email: "scott@ef.com",
            city: "boston"
        },
        {
            name: "Adam",
            email: "adam@ef.com",
            city: "sydney"
        }
    ] 
    res.json(students)
})

app.get("/users", function(req, res){
    console.log(users)
    // write the logic to fetch the data from DB

    res.json(users)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})