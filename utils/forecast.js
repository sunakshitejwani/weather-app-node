const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/" +
    latitude +
    "," +
    longitude +
    "?units=si";
    request({ url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect with the network',undefined);
        } else if(response.body.error) {
            callback('unable to find the location',undefined)
        } else {
            let temp = response.body.currently.temperature;
            let rainProb = response.body.currently.precipProbability;
            callback(undefined,console.log(response.body.daily.data[0].summary," It is currently ", temp, " degrees out. There is a ",rainProb,"% chance of rain."));
        }

    })
};

module.exports = forecast;
