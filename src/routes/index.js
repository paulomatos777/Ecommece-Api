const { Router } = require("express");
const { route } = require("express/lib/application");
const UserController = require("../controllers/UserController");
const LoginController = require("../controllers/LoginController");

const routes = Router();
routes.get("/", (req, res) => {
  res.send("Ola mundo");
});

routes.post("/users", UserController.createUser);
routes.get("/users", UserController.getUsers);
routes.get("/users/:user_id", UserController.getUserById);

routes.post("/login", LoginController.createSession);

routes.post("/products/:user_id");
routes.get("/products/:user_id");
routes.get("/products/:product_id");
routes.patch("/products/:user_id/product_id");
routes.delete("/products/:user_id/product_id");
routes.get("/products");
routes.get("/products/:product_id");

routes.post("/cart/:user_id");
routes.get("/cart/:cart_id");
routes.get("/cart/:user_id/:cart_id");

module.exports = routes;
