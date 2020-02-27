const names = ['Oni', 'Emma', 'Minato'];
const shortNames = names.filter((names) => {
    return names.length <= 4;
});

const geocode = (address, callback) => {
   setTimeout(() => {
    const data = {
        latitude:0,
        longitude:0
    }
    callback(data) // send data the callback, and then callback is called in geocode
   }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data);
}); // geocode is not going to have direct return value
