const express = require("express")
const app = express()
const cors = require("cors")
const {connection} = require("./config/db")
const {userRoute}= require("./routes/user.route")
app.use(cors())
app.use(express.json())
app.use("/",userRoute)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
       console.log("Connection established successfully")

       console.log("I am working fine at PORT 8080")
    } catch (error) {
        console.log({"error":error.message})
    }
})