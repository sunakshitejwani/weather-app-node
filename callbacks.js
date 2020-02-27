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
    return data;// this doesn't return
   }, 2000)
}//problem is return statements don't work in the async calls

const data = geocode('Philadelphia');
console.log(data);