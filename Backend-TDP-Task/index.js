const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const UserRoutes = require("./routes/userRoute.js")
const bookRoutes = require("./routes/")
const app = express()
dotenv.config()
const cors = require("cors")
const protect = require("./middleware/authMiddleware.js")

const port = process.env.PORT || 8000
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello world")
})


// database connection

const connect = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0/TDP-data");
        console.log("connected to database");
    } catch (error) {
        throw error
    }
}


mongoose.connection.on("disconnected", () => {
    console.log("disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

app.use(express.json({ limit: "3mb" }))

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/book', bookRoutes);


app.listen(port, () => {
    connect();
    console.log(`listening from ${port}`)
})