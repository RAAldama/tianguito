const express = require("express");
const cors = require("cors");

/*
ENDPOINTS (Falta aún subirlo a AWS Lambda)
    localhost:5000/markets
    localhost:5000/user
    localhost:5000/uploadProduct
    localhost:5000/createUser
*/

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is listenning on ${5000}! (http://localhost:${5000})");
});

//RDS (Para añadir mercados)  
app.get("/markets", (req, res) => {
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "tianguito.cyhw3fadblmi.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Admin6280",
    port: "3306",
    database: "TianguitoMarkets",
  });

  connection.connect();

  connection.query('SELECT * FROM markets', (err, results, fields) => {
    res.status(200).json({ markets: results })
  })
});

app.post("/markets", (req, res) => {
  const mysql = require("mysql");
  console.log("reqrqrqr")

  const connection = mysql.createConnection({
    host: "tianguito.cyhw3fadblmi.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Admin6280",
    port: "3306",
    database: "TianguitoMarkets",
  });

  connection.connect();

  console.log("Posteando "+req.body.name)

  connection.query('INSERT INTO markets VALUES("'+req.body.name+'")', (err, results, fields) => {
    res.status(200).json({names: results})
  })
});

app.put("/markets", (req, res) => {
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "tianguito.cyhw3fadblmi.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Admin6280",
    port: "3306",
    database: "TianguitoMarkets",
  });

  connection.connect();

  connection.query('UPDATE markets SET name="'+req.body.newName+'" WHERE name="'+req.body.oldName+'"', (err, results, fields) => {
    res.status(200)
  })
});

//DynamoDB (Para ver y crear usuarios)
app.get("/stand", (req, res) => {
  const AWS = require("aws-sdk");

  AWS.config.update({
    accessKeyId: "AKIA4IRMJ7XTPHL2YMNN",
    secretAccessKey: "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",
    region: "us-east-1",
  });

  const dynamodb = new AWS.DynamoDB();

  const params = {
    TableName: "Puestos",
    Select: "SPECIFIC_ATTRIBUTES",
    AttributesToGet: ["Puesto","Mercado"],
  };

  dynamodb
    .scan(params)
    .promise()
    .then(({ Items }) => {
      return Items.map((item) => {
        return { name: item.Puesto.S, market: item.Mercado.S };
      });
    })
    .then((results) => {
      console.log(results);
      res.status(200).json({ stands: results });
    });
});

app.post("/stand", (req, res) => {
  const AWS = require("aws-sdk");

  AWS.config.update({
    accessKeyId: "AKIA4IRMJ7XTPHL2YMNN",
    secretAccessKey: "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",
    region: "us-east-1",
  });

  const dynamodb = new AWS.DynamoDB();

  const params = {
    TableName: "Puestos",
    Select: "SPECIFIC_ATTRIBUTES",
    AttributesToGet: ["Puesto","Mercado"],
  };

  dynamodb.putItem(params, function (err, data) {
    res.status(200).json({
      url: data.Location,
    });
  });
});

//Convertir a CSV
const generateCSVFile = (data) => {
  const json2csv = require("json2csv");
  const fields = Object.keys(data);
  const csv = json2csv.parse([data], { fields });

  return csv;
};

//S3 (Para subir Productos como CSV)
app.post("/uploadProduct", (req, res) => {
  const AWS = require("aws-sdk");

  const s3 = new AWS.S3();
  const file = generateCSVFile(req.body);
  const bufferObject = new Buffer.from(file);

  var params = {
    Bucket: "",
    Key: "",
    Body: bufferObject,
    ACL: "",
  };

  s3.upload(params, function (err, data) {
    res.status(200).json({
      url: data.Location,
    });
  });
});