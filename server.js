//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  res.send(" Your BMI calculator is " + bmiCalculator(weight, height));
});

app.listen(3000, function () {
  console.log("BMI calculator running");
});

function bmiCalculator(weight, height) {
  return Math.round(weight / Math.pow(height, 2));
}
