import { AxiosResponse } from "axios";


interface TimeProps {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: string;
            main: string;
            description: string;
            icon: string;
          }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        visibility: number;
    }
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}


interface LocalTimeProps {
    altitude: string;
    altitudeAccuracy: number;
    latitude: number;
    accuracy: number;
    longitude: number;
    heading: number;
    speed: number;
}

interface ResultsProps {
    currentTemperature: number;
    temperatureMin: number;
    temperatureMax: number;
    locationName: string;
    wind: number;
    humidity: number;
    descriptionSky: string;
    currentIcon: string;
}

// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid={API key}

export default async function getCurrentWeather(location: LocalTimeProps): Promise<ResultsProps[]> {
    const axios = require('axios');

    const lat = location.latitude;
    const lon =  location.longitude;
    const key = "0e9c5e5e4b7d5aa5f6eb48bd40dd6031";

    var results: ResultsProps[] = [];
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then( (res: AxiosResponse) => {
        
        const data = res.data;  
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
    .catch((error: Error) => {
        console.log(error);
    })

    return results;
}