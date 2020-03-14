const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const url = 'https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/37.8267,-122.4233?units=si';

// request({ url: url, json: true}, (error,response) => {
//     if(error){
//         console.log("unable to connect to Weather Service!");
//     } else if (response.body.error) {
//         console.log("Unable to find the location");
//     } else {
//         let temp = response.body.currently.temperature;
//         let rainProb = response.body.currently.precipProbability;
//         console.log(response.body.daily.data[0].summary," It is currently ", temp, " degrees out. There is a ",rainProb,"% chance of rain.");
//     }


// })

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuZ2Vyc3RhcmR1c3QiLCJhIjoiY2s3NTE0emZkMGFuNjNtcGxxd2J3Ynd2ayJ9.eBUB_Cr-450NRqu1JmfLMg';

geocode ('Jaipur',(error, data) => {
    console.log("Error",error);
    console.log("Data",data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  }) 