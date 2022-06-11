const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "Desenvolver aplicações",
    },
    {
      title: "E",
      message: "Ejs usa JS para renderizar HTML",
    },
  ];

  const subtitle = "Uma Linguagem de modelagem para criação de pages HTML";
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Server is Running!");
