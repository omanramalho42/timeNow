export default async function getCurrentWeather(location) {
    const axios = require('axios');

    const lat = location.latitude;
    const lon =  location.longitude;
    const key = "0e9c5e5e4b7d5aa5f6eb48bd40dd6031";

    var results = [];

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then( (res) => {
        
        const data = res.data     
        const locationName = (data.sys.country + ', ' + ' ' + data.name);
        const temperatureMin = data.main.temp_min;
        const temperatureMax = data.main.temp_max;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const currentTemperature = data.main.temp;
        const currentIcon = data.weather[0].icon;
        const descriptionSky = data.weather[0].description;


        results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity, descriptionSky, currentIcon];
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

    return results;
}