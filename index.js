const express = require("express")

const blogRouter = require("./BlogProject/blogRouter")
const app = express() 
const dotenv = require("dotenv")
dotenv.config(); 
const PORT = process.env.PORT
// const cors = require("cors") 
app.use(express.json())


app.use("/blogrouter", blogRouter)


app.listen(PORT, ()=>{
    try{
        console.log(`server is running in ${PORT}`);
    }
    catch (err){
        console.log(err, "error while loading");
    }
})
