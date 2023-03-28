
const db = require("../models");
const EmployeeDetails = db.employee; // from index.page
const Op = db.Sequelize.Op;

// create emp details
exports.create =(req,res)=>{

    // validate request
    if (!req.body.FirstName) {
        res.status(400).send({
          message: "FirstName can not be empty!"
        });
        return;
      }

    // Create a empDet
    const employeeDet = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        WorkDept: req.body.WorkDept,
        PhoneNo: req.body.PhoneNo,
        HireDate: req.body.HireDate,
        JobTitle: req.body.JobTitle,
        Sex: req.body.Sex,
        Salary: req.body.Salary, 
        Bonus: req.body.Bonus
    };

    // Save emp in the database
    EmployeeDetails.create(employeeDet)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Employee Details."
        });
    });


};
