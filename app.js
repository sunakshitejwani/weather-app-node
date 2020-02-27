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
// CHallenge
// Goal: Handle error for Geocoding request
//
// 1. Setup an error handler for low level errors
// 2. Test by disabling the network request and running the App
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app.

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuZ2Vyc3RhcmR1c3QiLCJhIjoiY2s3NTE0emZkMGFuNjNtcGxxd2J3Ynd2ayJ9.eBUB_Cr-450NRqu1JmfLMg';

request({url: geocodeUrl, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to Geocode service");
    } else if(response.body.features.length === 0 ){
        console.log("Unable to find location try again with different search term.");
    }
    else {
        let latitude = response.body.features[0].center[1]; // latitude comes from the second item of array
        let longitude = response.body.features[0].center[0];// longitude comes from the first item of array
        let city = response.body.features[0].text;
        console.log("For ",city," the latitude is ",latitude," and the longitude is ",longitude,".");
    }
})