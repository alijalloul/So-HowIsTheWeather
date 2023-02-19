const express = require("express");
const mongoose = require("mongoose");
const User = require("./userManualMarker.js");

const app = express();

mongoose.connect("mongodb://127.0.0.1/WeatherInfo");

let port = "https://thisisawebsitewithareallylongname.buzz/myWeather/script/" || 5000
app.listen(port, () => console.log("connect to port 5000 success"));
app.use(express.static("../public"));  
app.use(express.json());

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
        altitude: data.userAltitude
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
        locationAltitude: data.locationAltitude
    });

    const user = new User({locationCountry: data.locationCountry, locationVillage: data.locationVillage, locationLatLon: data.locationLatLon, locationTemperature: data.locationTemperature, locationWeatherDesc: data.locationWeatherDesc});
    user.save().then(() => console.log("user saved"));
    console.log(user);
});