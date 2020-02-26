const request = require("request");

const url = 'https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/37.8267,-122.4233?units=si';

request({ url: url, json: true}, (error,response) => {
    let temp = response.body.currently.temperature;
    let rainProb = response.body.currently.precipProbability;
    console.log("It is currently ", temp, " degrees out. There is a ",rainProb,"% chance of rain.");


})