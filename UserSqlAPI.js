const express = require("express")
const sql = require("mssql")
const cors = require("cors")
const app = express()
const router = express.Router()

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'UserDB',
    options: {
        trustServerCertificate: true 
      }
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

router.get("/", (req, res) => {
    res.json("Welcome to user API using SQ Server")
})

router.get("/users", (req, res)=>{
    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Connected to SQL server Sucessfully`)
            const request = new sql.Request()
            const selectQuery = "SELECT id, name, email , city from Users Order by id Asc"
            request.query(selectQuery, (err, data) =>{
                if(err){
                    throw err
                }
                res.json(data.recordset)
            })
        }
    })

})

router.get("/users/:id", (req, res)=>{
    const userId = req.params.id
    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Connected to SQL server Sucessfully`)

            const request = new sql.Request()
            const selectByIDQuery = `SELECT id, name, email , city from Users WHERE id=${userId}`
            request.query(selectByIDQuery, (err, data) =>{
                if(err){
                    throw err
                }
                res.json(data.recordset)
            })
        }
    })

})

router.post("/users", (req, res) => {
    const {name, email, city} = req.body
    console.log(req.body)
    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Connected to SQL server Sucessfully`)

            const request = new sql.Request()
            const insertQuery = `INSERT INTO Users (name, email, city) VALUES ('${name}', '${email}', '${city}')`
            request.query(insertQuery, (err, data)=>{
                if(err){
                    throw err
                }
                res.json(data)
            })
        }
    })

  
})

router.put("/users/:id", (req, res) => {
    const userId = req.params.id
    const {name, email, city} = req.body 
    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err)
        } else {

            const request = new sql.Request()
            const updateQuery = `UPDATE Users SET name = '${name}', email='${email}', city='${city}' WHERE ID=${userId}`
            request.query(updateQuery, (err, data)=>{
                if(err){
                    throw err
                }
                res.json(data)
            })
        }
    })

})

router.delete("/users/:id", (req, res)=>{
    const userId = req.params.id
    sql.connect(dbConfig, (err) => {
        if(err){
            console.log(err)
        } else {
            const request = new sql.Request()
            const deleteQuery = `DELETE FROM Users WHERE ID=${userId}`
            request.query(deleteQuery, (err, data)=>{
                if(err){
                    throw err
                }
                res.json(data)
            })
        }
    })

})


app.use("/api", router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server listening at PORT ${PORT}`)
})

