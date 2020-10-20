const express = require("express");
const mongoose = require("mongoose");
const exphds = require("express-handlebars");
const todoRoutes = require("./routes/todos");
const path = require('path')

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphds.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://mike:theogenes00177100@cluster0.ealti.mongodb.net/todos",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
    app.listen(PORT, () => console.log("Server has been loaded..."));
  } catch (e) {
    console.log(e);
  }
}

start();
