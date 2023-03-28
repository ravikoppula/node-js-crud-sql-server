
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

// get all employess
exports.findAll = (req, res) => {

    EmployeeDetails.findAll({ where: { Sex: 1 } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving employees deatils."
        });
    });

};

// update

// Update a Employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    EmployeeDetails.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee det was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Employee det with id=${id}. Maybe emp Id was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employee det with id=" + id
        });
      });
  };

// empById
exports.empById = (req, res) => {
  
    const id = req.params.id;
   
    EmployeeDetails.findByPk(id)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message: "Error retrieving Employee det with id=" + id
         });
       });
   
   };
// delete emp details by Id
exports.delete = (req, res) => {
  
    const id = req.params.id;

    EmployeeDetails.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee det was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employee det with id=${id}. Maybe Employee det was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employee det with id=" + id
        });
      });

};


