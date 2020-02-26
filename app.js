const request = require("request");

const url = 'https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/37.8267,-122.4233';

request({ url: url, json: true}, (error,response) => {
    let temp = response.body.currently.temperature;
    let rainProb = response.body.currently.precipProbability;
    console.log("It is currently ", temp, " degrees out. There is a ",rainProb,"% chance of rain.");


})

// Goal is to print a small forecast to the User
//
// 1. Print: "It is currently 58.55 degrees out. There is a o% chance of rain."
// Test your work!