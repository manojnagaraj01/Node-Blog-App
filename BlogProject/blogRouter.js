const route = require("express").Router()

const blogdata = require("./blogData")

route.post("/createblog", (req,res)=>{
    // const data = req.body;
    // console.log();
    return res.send("blog created")
})

route.get("/getblogdata",(req,res)=>{
    return res.send(blogdata)
})
route.get("/getblogdata/bollywoodlatest", (req, res) => {
    const filteredData = blogdata.filter(item => item.footer === "Bollywood Latest");
    return res.send(filteredData);
});


module.exports = route;