const connectToMongo = require("./db")

connectToMongo()

const express = require("express")

const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/auth", require("./routes/auth"))

app.listen(8000, ()=>{
    console.log("app listing at http://localhost:8000")
})