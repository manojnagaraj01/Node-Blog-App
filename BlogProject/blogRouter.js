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
// bollywood
route.get("/getblogdata/bollywoodlatest", (req, res) => {
    const bollywoodlatestData = blogdata.filter(item => item.footer === "Bollywood Latest");
    return res.send(bollywoodlatestData);
});
route.get("/getblogdata/bollywoodtop", (req, res) => {
    const bollywoodtop = blogdata.filter(item => item.footer === "Bollywood Top");
    return res.send(bollywoodtop);
});
// hollywoood
route.get("/getblogdata/hollywoodlatest", (req, res) => {
    const hollywoodlatest = blogdata.filter(item => item.footer === "Hollywood Latest");
    return res.send(hollywoodlatest);
});
route.get("/getblogdata/hollywoodtop", (req, res) => {
    const hollywoodtop = blogdata.filter(item => item.footer === "Hollywood Top");
    return res.send(hollywoodtop);
});
// technology
route.get("/getblogdata/technologylatest", (req, res) => {
    const technologylatest = blogdata.filter(item => item.footer === "Technology Latest");
    return res.send(technologylatest);
});
route.get("/getblogdata/technologytop", (req, res) => {
    const technologytop = blogdata.filter(item => item.footer === "Technology Top");
    return res.send(technologytop);
});
// fitness
route.get("/getblogdata/fitnesslatest", (req, res) => {
    const fitnesslatest = blogdata.filter(item => item.footer === "Fitness Latest");
    return res.send(fitnesslatest);
});
route.get("/getblogdata/fitnesstop", (req, res) => {
    const fitnesstop = blogdata.filter(item => item.footer === "Fitness Top");
    return res.send(fitnesstop);
});
// food 
route.get("/getblogdata/foodlatest", (req, res) => {
    const foodlatest = blogdata.filter(item => item.footer === "Food Latest");
    return res.send(foodlatest);
});
route.get("/getblogdata/foodtop", (req, res) => {
    const foodtop = blogdata.filter(item => item.footer === "Food Top");
    return res.send(foodtop);
});
// article
route.get("/getblogdata/article", (req, res) => {
    const article = blogdata.filter(item => item.cat === "Article");
    return res.send(article);
});
//top
route.get("/getblogdata/top", (req, res) => {
    const top = blogdata.filter(item => item.cat === "Top");
    return res.send(top);
});
// latest
route.get("/getblogdata/latest", (req, res) => {
    const latest = blogdata.filter(item => item.cat === "Latest");
    return res.send(latest);
});
// stories
route.get("/getblogdata/stories", (req, res) => {
    const stories = blogdata.filter(item => item.cat === "Stories");
    return res.send(stories);
});
//post
route.get("/getblogdata/post", (req, res) => {
    const post = blogdata.filter(item => item.cat === "Post");
    return res.send(post);
});
route.get("/getblogdata/imageleft", (req, res) => {
    const imageleft = blogdata.filter(item => item.cat === "image left");
    return res.send(imageleft);
});
route.get("/getblogdata/imageright", (req, res) => {
    const imageright = blogdata.filter(item => item.cat === "image right");
    return res.send(imageright);
});

route.get("/getsingleblogdata/:ids", (req,res)=>{
    const ids = req.params.ids ;
    // console.log(dataa);
    const singleData = blogdata.find(item=>item.id==ids)
    return res.send(singleData)
})

module.exports = route;