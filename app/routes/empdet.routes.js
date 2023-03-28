
module.exports = app => {
    const employeeDetails = require("../controllers/empdet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new emp information
    router.post("/", employeeDetails.create);
  
    // get empdetails
    router.get("/", employeeDetails.findAll);

    // update emp info by Id
    router.put("/:id", employeeDetails.update);

    // select employee by Id
    router.get("/:id", employeeDetails.empById);
    
    //delete emp by Id
    router.delete("/:id", employeeDetails.delete);

    app.use('/api/empdetails', router);

  };
