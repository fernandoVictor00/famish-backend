const { Router } = require("express");
const routes = new Router();
routes.get("/health", (req, res) => {
  res.send({ message: "Connect with success!" });
  console.log("ok");
});

module.exports = routes;
