module.exports = app => {

    const roles = require("../controllers/role.controller.js"); 
    
  
    const router = require("express").Router();

    

    router.post("/", roles.create);

    
    router.get("/", roles.findAll);

  
    router.get("/:id", roles.findOne); 

    
    router.put("/:id", roles.update);

   
    router.delete("/:id", roles.delete);

    
    app.use('/api/roles', router);
};