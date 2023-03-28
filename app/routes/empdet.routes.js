
module.exports = app => {
    const employeeDetails = require("../controllers/empdet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new emp information
    router.post("/", employeeDetails.create);
  
    // get empdetails
    router.get("/", employeeDetails.findAll);

    app.use('/api/empdetails', router);

  };
