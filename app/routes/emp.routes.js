
module.exports = app => {
    const employees = require("../controllers/emp.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", employees.create);
  
    // Retrieve all employees
    router.get("/", employees.findAll);
  
    // Retrieve all published employees
    router.get("/published", employees.findAllPublished);
  
    // Retrieve a single emp with id
    router.get("/:id", employees.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", employees.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", employees.delete);
  
    // Delete all employees
    router.delete("/", employees.deleteAll);
  
    app.use('/api/employees', router);
  };
