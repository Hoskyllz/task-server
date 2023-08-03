require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
const cors = require ('cors')
const taskRouter = require("./routes/taskRouter")

//middleware
app.use(express.json())
app.use(cors())

//route
app.use("/api/tasks", taskRouter)

//db connection
const start = async () => {
   try {
       mongoose.connect(process.env.MONGO_URI)
       app.listen(PORT, () => {
           console.log(`server running`);
       })
   } catch (error) {
    console.log(error);
   }
}


start()


//error
app.use((req, res) => {
    res.status(404).send ("Resource Not Found")
})