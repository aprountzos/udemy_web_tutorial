import express from "express";

const app = express();
const port = 3000;
var posts = []
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts:posts})
});

app.get("/create-post", (req,res)=>{
    res.render("create_post.ejs");
});

app.get("/edit-post/:id", (req,res)=>{
    let post = posts[req.params.id];
    res.render("edit_post.ejs",{name:post["name"],details:post["details"], id: req.params.id});
});

app.post("/edit-post/:id", (req,res)=>{
    posts[req.params.id]["name"] = req.body["post-name"];
    posts[req.params.id]["details"] = req.body["post-details"];
    res.redirect(`/post/${req.params.id}`);
});


app.post("/create-post",(req,res)=>{
    let post = {
        name: req.body["post-name"],
        details: req.body["post-details"],
    }
    res.locals = {posts:posts};
    posts.push(post);
    res.redirect("/");
});

app.get("/post/:id/",(req,res)=>{
    let post = posts[req.params.id];
    res.render("post.ejs", {post:post, id:req.params.id});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});