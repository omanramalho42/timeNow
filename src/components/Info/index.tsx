import React, { useEffect, useState } from 'react';

import { ref, set, push, child } from 'firebase/database';
import { db } from '../../Config';

import uuid from 'react-native-uuid';

import { TouchableOpacity } from 'react-native';

import { TimeIconSky } from '../TimeIconSky';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { 
    Container, 
    Content, 
    Title, 
    TextInfo, 
    IconView 
} from './styles';

interface LocalTimeProps {
    altitude: string;
    altitudeAccuracy: number;
    lat: number;
    accuracy: number;
    lng: number;
    heading: number;
    speed: number;
}

interface FavoriteCitysProps {
    // favoriteCitys: {
      id?: number;
      location: {
        lat: number; 
        lng: number;
      },
      favorite?: boolean;
    // }
  }

interface InfoProps {
    geoLocation: LocalTimeProps;
}

interface SkyProps {
    dataSky: {
        sky: "clear sky" | "few clouds" | "scattered clouds" | "broken clouds" | "shower rain" | "rain" | "thunderstorm" | "snow" | "mist";
        icon: "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "05d" | "05n" | "06d" | "06n" | "07d" | "07n" | "08d" | "08n" | "09d" | "09n" | "10d" | "10n" | "11d" | "11n" | "13d" | "13n" | "50d" | "50n";
    }
}


async function getCurrentWeather(location : LocalTimeProps) {
    const axios = require('axios');

    console.log("local axios");
    console.log(location);

    const lat = location.lat;
    const lon =  location.lng;
    const key = "0e9c5e5e4b7d5aa5f6eb48bd40dd6031";

    var results: any = [];

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then( (res: any) => {
        
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
    .catch((error: Error) => {
        console.log(error);
    })

    return results;
}

export const Info = ({ geoLocation }: any) => {

    const [translate, setTranslate] = useState(false);
    //VARIAVEIS
    const [currentTemperature,setCurrentTemperature] = useState<any>();
    const [temperatureMin,setTemperatureMin] = useState<any>();
    const [temperatureMax, setTemperatureMax] = useState<any>();
    const [locationName, setLocationName] = useState<any>();
    const [wind, setWind] = useState<any>();
    const [humidity, setHumidity] = useState<any>();
    const [descriptionSky, setDescriptionSky] = useState<any>();
    const [currentIcon, setCurrenticon] = useState<any>();

    const handleSetFavorite = (location: any) => {
        // const newKey = push(child(ref(db), 'favorite')).key;
        
        const id = uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'

        set(ref(db, 'favorite/'), {
            id: id,
            location: location,
            favorite: true
        }).then(() => {
            alert('cidade adicionada como favorita');
        }).catch((err) => {
            console.log(err);
        });
  }

   const [dataSky,setDataSky] = useState<SkyProps>({
        dataSky: {
            sky: descriptionSky,
            icon: currentIcon,
        }
    });

    const handleActiveTranslate = () => {
        if(translate) {
            window.alert("Conversão para fahrenheit");
        } else {
            window.alert("Conversão para Celcius");
        }
        setTranslate(!translate);
    }

    // CONVERTENDO DE KLEVIN PARA CELCIUS
    const convertKelvinToC = (kelvin: any) => {
        if(translate) {
            return parseInt(kelvin - 273);
        } else {
            return parseInt((kelvin * (9/5)) - 459.67);
        }  
    }

    async function setCurrentWeather(){
        // await getLocation();
        // DATA CONTEM INFORMAÇÕES DA LOCALIZACAO PASSADA COMO PARAMETRO
        const data = await getCurrentWeather(geoLocation);
        // console.log("⚡🌞⛈🌥");
        // console.log(data);

        // Vem da api nessa ordem [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
        setCurrentTemperature(convertKelvinToC(data[0]));
        setTemperatureMin(convertKelvinToC(data[1]));
        setTemperatureMax(convertKelvinToC(data[2]));
        setLocationName(data[3]);
        setWind(data[4]);
        setHumidity(data[5]);
        setDescriptionSky(data[6]);
        setCurrenticon(data[7]);

        setDataSky({
            sky: descriptionSky,
            icon: currentIcon,
        });
    }

  useEffect(() => {
    setCurrentWeather();
    console.log("geo localizacao:");
    console.log(geoLocation);

    console.log("sky description");
    console.log(dataSky);
  },[geoLocation, translate]);

  return (
    <Container>
        <TouchableOpacity onPress={() => handleActiveTranslate()}>
            <MaterialIcons name="g-translate" size={24} color="white" />
        </TouchableOpacity>
        {/* <Title>{JSON.stringify(geoLocation)}</Title> */}
        <Title>{locationName}</Title>
        
        <Content>
            <TextInfo>
                {descriptionSky}
            </TextInfo>
            <IconView>
                <TimeIconSky dataSky={dataSky} />
            </IconView>
        </Content>

        <Content>
            <TextInfo>
                Temperature
            </TextInfo>
            <TextInfo>
                {currentTemperature} {translate ? "°C" : "°F"}
            </TextInfo>
        </Content>

        <Content>
            <TextInfo>
               wind
            </TextInfo>
            <TextInfo>
                {wind} km/h
            </TextInfo>
        </Content>

        <Content>
            <TouchableOpacity onPress={() => handleSetFavorite(geoLocation)}>
                <AntDesign name="heart" size={24} color="red" />
            </TouchableOpacity>
        </Content>

    </Container>
  )
}
