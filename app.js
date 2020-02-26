const request = require("request");

const url = 'https://api.darksky.net/forecast/42f4f0b7f630aa1fff073d24ef993013/37.8267,-122.4233';

request({ url: url, json: true}, (error,response) => {
    console.log(response.body.currently);
})