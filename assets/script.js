console.log(this);


var APIKey = "10a959efdd7a9844b3c1f8fa2c94a115";
var cityName = $('#city-name');
var searchButton = $('#search');

function getGeo(){
    console.log("The button is working...")
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`)
.then(function (response){
    return response.json();
})
.then(function (data){
    console.log(data);
});
};

searchButton.on('click', getGeo());





// function getWeather() {
//     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${APIKey}`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// };
        
//         getWeather();