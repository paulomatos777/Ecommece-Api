const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Ola mundo");
});

module.exports = routes;
