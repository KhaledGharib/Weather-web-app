const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const port = process.env.PORT || 3030;

// Express config
const publicDirPath = path.join(__dirname, "../public");
const viwePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//handlebars engine
app.set("view engine", "hbs");
app.set("views", viwePath);
hbs.registerPartials(partialsPath);

//setup static to serve
app.use(express.static(publicDirPath));

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "this is helpful text",
    title: "Help",
    name: "Khaled Gharib",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Khaled Gharib",
  });
});

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Khaled Gharib",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Can't leave search box empty",
    });
  }

  geocode(req.query.address, (error, { lat, long, location } = {}) => {
    if (error) return res.send({ error });
    forecast(lat, long, (error, forcastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        location,
        forcastData,
        address: req.query.address,
      });
    });
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error 404. Page not found",
    name: "Khaled Gharib",
  });
});

app.listen(port, () => {
  console.log("server is up " + port);
});
