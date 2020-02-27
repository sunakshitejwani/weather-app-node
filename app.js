const request = require("request");

const url = 'https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/37.8267,-122.4233?units=si';

request({ url: url, json: true}, (error,response) => {
    if(error){
        console.log("unable to connect to Weather Service!");
    } else if (response.body.error) {
        console.log("Unable to find the location");
    } else {
        let temp = response.body.currently.temperature;
        let rainProb = response.body.currently.precipProbability;
        console.log(response.body.daily.data[0].summary," It is currently ", temp, " degrees out. There is a ",rainProb,"% chance of rain.");
    }


})

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuZ2Vyc3RhcmR1c3QiLCJhIjoiY2s3NTE0emZkMGFuNjNtcGxxd2J3Ynd2ayJ9.eBUB_Cr-450NRqu1JmfLMg';

// request({url: geocodeUrl, json: true}, (error, response) => {
//     let latitude = response.body.features[0].center[1]; // latitude comes from the second item of array
//     let longitude = response.body.features[0].center[0];// longitude comes from the first item of array
//     let city = response.body.features[0].text;
//     console.log("For ",city," the latitude is ",latitude," and the longitude is ",longitude,".");
// })