const express = require("express");
const cors = require("cors");
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is listenning on 5000! (http://localhost:5000)");
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
    TableName: 'Puestos',
    Item: {
      'Puesto' : {S: req.body.stand},
      'Mercado' : {S: req.body.market}
    }
  };

  console.log( req.body.stand+" "+ req.body.market)

  dynamodb.putItem(params, function (err, data) {
    res.status(200).json({
      data:data
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
app.post("/product", (req, res) => {
  const AWS = require("aws-sdk");
  const fs = require("fs"); 

  const s3 = new AWS.S3();
  const file = generateCSVFile(req.body);
  const bufferObject = new Buffer.from(file);

  AWS.config.update({
    accessKeyId: "AKIARDKAXXUNHMX3NSEA",
    secretAccessKey: "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",
    region: "us-east-1",
  });

  var params = {
    Bucket: "tianguitobucket",
    Key: "productos.csv",
    Body: bufferObject,
    ACL: "public-read",
  };

  var paramsGet = {
    Bucket: "tianguitobucket",
    Key: "productos.csv",
  }

  let productos = s3.getObject(paramsGet, function (err,data) {
    return data
  })

  console.log(productos)

  s3.upload(params, function (err, data) {
    if(err){
      console.log(err)
      return res.status(401).json({
        error: err
      })
    }
    res.status(200).json({
      url: data.Location
    });
  });
});


app.get("/product", (req, res) => {
  const AWS = require("aws-sdk");

  const s3 = new AWS.S3();
  const file = generateCSVFile(req.body);
  const bufferObject = new Buffer.from(file);

  AWS.config.update({
    accessKeyId: "AKIARDKAXXUNHMX3NSEA",
    secretAccessKey: "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",
    region: "us-east-1",
  });

  var params = {
    Bucket: "tianguitobucket",
    Key: "productos.csv",
    Body: bufferObject,
    ACL: "public-read",
  };

  s3.upload(params, function (err, data) {
    res.status(200).json({
    });
  });
});

//Endpoints de Cognito
const poolData = {    
  UserPoolId : "us-east-1_Zn9MDZElJ", 
  ClientId : "7egi5mfhajdf581umbs380aioc" 
  }; 

const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

app.get("/register", () => {
  console.log("register")
})

app.post("/register", (req,res) => {
  console.log("register")
  var attributeList = [];
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:req.body.email}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:req.body.address}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:req.body.email}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:req.body.phone}));

  userPool.signUp(req.body.email, req.body.password, attributeList, null, function(err, result){
      if (err) {
          console.log(err);
          return;
      }
      cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
      Login(req.body.email,req.body.password)
      return res.status(200).json({
        result
      })
  });

})

//Métodos de Cognito

function Login(email,password) {
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username : email,
      Password : password,
  });

  var userData = {
      Username : email,
      Pool : userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          console.log('access token + ' + result.getAccessToken().getJwtToken());
          console.log('id token + ' + result.getIdToken().getJwtToken());
          console.log('refresh token + ' + result.getRefreshToken().getToken());
      },
      onFailure: function(err) {
          console.log(err);
      },

  });
}

function ValidateToken(token) {
  request({
      url: `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          pems = {};
          var keys = body['keys'];
          for(var i = 0; i < keys.length; i++) {
              //Convert each key to PEM
              var key_id = keys[i].kid;
              var modulus = keys[i].n;
              var exponent = keys[i].e;
              var key_type = keys[i].kty;
              var jwk = { kty: key_type, n: modulus, e: exponent};
              var pem = jwkToPem(jwk);
              pems[key_id] = pem;
          }
          //validate the token
          var decodedJwt = jwt.decode(token, {complete: true});
          if (!decodedJwt) {
              console.log("Not a valid JWT token");
              return;
          }

          var kid = decodedJwt.header.kid;
          var pem = pems[kid];
          if (!pem) {
              console.log('Invalid token');
              return;
          }

          jwt.verify(token, pem, function(err, payload) {
              if(err) {
                  console.log("Invalid Token.");
              } else {
                  console.log("Valid Token.");
                  console.log(payload);
              }
          });
      } else {
          console.log("Error! Unable to download JWKs");
      }
  });
}
