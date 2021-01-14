const path = require("path");
const express = require("express");
const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

//post request handler for /send endpoint
app.post("/send", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//starting express server to listen to requests on port 3030
app.listen(3030, () => {
  console.log("server start on port 3030");
});

//https://medium.com/swlh/create-an-enquiry-form-in-react-and-send-email-using-nodejs-1c0cd590dce1
