const { VarChar } = require("mssql");

module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("empployee", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Employee;
  };

  module.exports = (sequelize, Sequelize) => {
    const EmployeeDetails = sequelize.define("EmployeeDetails", {
     
      // EmpNo:
      // { 
      //   type: Sequelize.Int,
      //    primaryKey: true, 
      //    autoIncrement: true
      // },   
        
      FirstName: { type: Sequelize.STRING(50) },
      LastName: { type: Sequelize.STRING(50) },
      DOB: { type: Sequelize.DATEONLY  },
      WorkDept:{type: Sequelize.STRING(3)} ,
      PhoneNo:{type:Sequelize.STRING(10)},
      HireDate:{type:Sequelize.DATEONLY   },
      JobTitle:{type:Sequelize.STRING(8)},
      Sex:{type:Sequelize.STRING(1)},
      Salary:{type:Sequelize.DECIMAL(9,2)},
      Bonus:{type:Sequelize.DECIMAL(9,2)},
    
    });
  
    return EmployeeDetails;
  };
