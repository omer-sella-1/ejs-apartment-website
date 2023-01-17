//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

const featuresContent = ["Kitchentte ", "Roof ", "Private toilet "];
const pricingContent = "The price is 2400 Shekels for the rent + about 300 Shekels for utilities"

const replacers = [];

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/features", function(req, res) {
  res.render("features", {
    featuresContent: featuresContent
  })
});

app.get("/pricing", function(req, res) {
  res.render("pricing", {
    pricingContent: pricingContent
  })
});

app.get("/compose", function(req, res) {
  res.render("compose")
});

app.post("/compose", function(req, res) {
  const replacer = {
    name: req.body.name,
    details: req.body.details
  };
  replacers.push(replacer);
  res.redirect("/options");
});

app.get("/options", function(req, res) {
  res.render("options", {
    replacersArr: replacers
  });
});





app.listen(3000, function() {
  console.log("Server listening on port 3000");
})