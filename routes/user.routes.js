module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();

  router.post("/", users.create);
  router.get("/", users.findAll);
 

  app.use('/api/users', router);
};