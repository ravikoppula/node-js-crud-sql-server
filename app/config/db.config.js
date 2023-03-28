
module.exports = {
    HOST: "172.30.82.152",
    PORT: "2021",
    USER: "eservicesadm",
    PASSWORD: "E_$erv1ces@dm",
    DB: "MARA",
    dialect: "mssql",
    
    /* pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    */
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }


  };
