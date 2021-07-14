const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://krishna:test1234@nodeln.l8wb4.mongodb.net/node-blog?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {app.listen(9000), console.log("Listening to port 9000")})
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

//blog routes
app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
