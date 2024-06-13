const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

let port = process.env.PORT || 5000;
app.listen(port, () => console.log("connect to port ", port, " success"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/userLoc", (request, response) => {
  console.log("I got userLoc!");
  console.log(request.body);
  const data = request.body;
  response.json({
    status: "success",
    country: data.userCountry,
    village: data.userVillage,
    loaction: data.userLatLon,
    tmep: data.userTemperature,
    weatherDesc: data.userWeatherDesc,
    altitude: data.userAltitude,
  });
});

app.post("/manualMarker", (request, response) => {
  console.log("I got manualMarker!");
  console.log(request.body);
  const data = request.body;

  response.json({
    status: "success",
    locationCountry: data.locationCountry,
    locationVillage: data.locationVillage,
    locationLatLon: data.locationLatLon,
    locationTemperature: data.locationTemperature,
    locationWeatherDesc: data.locationWeatherDesc,
    locationAltitude: data.locationAltitude,
  });
});

app.post("/contactFormSubmit", (req, res) => {
  console.log("I got contactFormSubmit!");
  console.log(req.body);
  const data = req.body;

  res.json({
    status: "success",
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "business.ali.z.jalloul@gmail.com",
      pass: process.env.emailPass,
    },
  });

  const mailOptions = {
    from: data.email,
    to: "business.ali.z.jalloul@gmail.com",
    subject: data.subject,
    text: data.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send("error: " + error);
    } else {
      console.log("Email was sent successfully " + info.response);
      req.status(200).send("success");
    }
  });
});
