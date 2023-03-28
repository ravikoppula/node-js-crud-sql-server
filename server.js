
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models"); 
// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// db.sequelize.sync({ force: false }).then(() => {
//     console.log("create new tables in the db.");
// });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to emp crud in node." });
});

// You can see that we use a controller from /controllers/employee.controller
require("./app/routes/emp.routes")(app);
require("./app/routes/empdet.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


