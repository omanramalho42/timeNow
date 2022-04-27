import React, { useEffect, useState } from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { Entypo, FontAwesome, Feather, Ionicons} from '@expo/vector-icons';

import getCurrentWeather from '../../api/api';
import * as Location from 'expo-location'

import { Card } from '../../components/Card';
import { Info } from '../../components/Info';
import { ListLocations } from '../../components/ListLocations';

import {
    Container,
    AtualCityVisualizer,
    Content,
    ContentInfo,
    ContainerInfo,
    Title,
    Temperature,
    Local,
    LocalText,
    OverView,
    TextInfo,
    IconView,
    Data,
} from './styles';


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

interface CardProps {
    location: string;
    icon: string;
    turno: string;
}

const TimeIcon = ({icon}: string) => {

    useEffect(() => {
        console.log("sky:");
        console.log(descriptionSky);
    },[descriptionSky]);

    let actualTime = new Date();
    let hours = actualTime.getHours();

    return (
        <IconView>
            <Text>
            { (hours > 18 || hours < 5 && descriptionSky === "clear sky") 
                ? ("🌙") 
                : (hours > 18 || hours < 5 && descriptionSky === "broken clouds") 
                ? ("☁")
                : (hours > 5 || hours < 7)
                ? ("🌄") 
                : (hours > 7 || hours <= 18)
                ? ("🌞")
                : (hours > 18 || hours < 19)
                ? ("🌅")
                : ("")
            }
            </Text>  
        </IconView>
    )

}

const Home:React.FC = () => {
    
    const city: CardProps = {
        location: 'Fortaleza',
        icon: 'sun',
        turno: 'manha',
    }

    // LOCAL E MSG DE ERRO
    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<string>("");

    //VARIAVEIS
    const [currentTemperature,setCurrentTemperature] = useState();
    const [temperatureMin,setTemperatureMin] = useState();
    const [temperatureMax, setTemperatureMax] = useState();
    const [locationName, setLocationName] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [descriptionSky, setDescriptionSky] = useState();
    const [currentIcon, setCurrenticon] = useState();

    async function getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
          }else{
            let location = await Location.getCurrentPositionAsync({})
            await setLocation(location.coords)
          }
    }

    // CONVERTENDO DE KLEVIN PARA CELCIUS
    function convertKelvinToC(kelvin: any){
        return parseInt(kelvin - 273);
    }

    async function setCurrentWeather(){
        await getLocation()
        // DATA CONTEM INFORMAÇÕES DA LOCALIZACAO PASSADA COMO PARAMETRO
        const data = await getCurrentWeather(location);
        console.log("⚡🌞⛈🌥");
        console.log(data);

        // Vem da api nessa ordem [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
        setCurrentTemperature(convertKelvinToC(data[0]));
        setTemperatureMin(convertKelvinToC(data[1]));
        setTemperatureMax(convertKelvinToC(data[2]));
        setLocationName(data[3]);
        setWind(data[4]);
        setHumidity(data[5]);
        setDescriptionSky(data[6]);
    }
    //ESTADO DE TEMPO
    const [time, setTime] = useState<any>();
    // FUNÇÃO QUE PEGA AS HORAS EXATAS
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
        setCurrentWeather();
    }, []);
  
    let localTimeInfo = 'Waiting..';
    if (errorMsg) {
        localTimeInfo = errorMsg;
    } else if (location) {
      localTimeInfo = JSON.stringify(location);
    }

    console.log(localTimeInfo);
    console.log("time");
    console.log(time);

    return (
        <Container>
            <AtualCityVisualizer>
                
                <Local>
                    <Entypo name="location-pin" size={24} color="white" />
                    <LocalText>{locationName}</LocalText>
                </Local>

                <OverView>
                    <TextInfo>textInfo</TextInfo>
                </OverView>
                
                <IconView>
                    {/* <TimeIcon descriptionSky={descriptionSky}/> */}
                    {descriptionSky === "clear sky" 
                        ? "🌞" 
                        : "broken clouds" 
                        ? "⛈" 
                        : ""
                    }
                </IconView>

                {/* <TouchableOpacity onPress={() => setCurrentWeather()}>
                    <FontAwesome name="refresh" size={24} color="white" />
                </TouchableOpacity> */}

                <Content>
                    <Temperature>
                        {currentTemperature}°
                    </Temperature>
                    <Title>
                        {descriptionSky}
                    </Title>
                    <Data>
                        Monday 17 May
                    </Data>
                </Content>

                <ContentInfo>

                    <ContainerInfo>
                        <Feather name="wind" size={24} color="white" />
                        <LocalText>{wind}</LocalText>
                        <TextInfo>wind</TextInfo>
                    </ContainerInfo>

                    <ContainerInfo>
                        <Feather name="cloud-rain" size={24} color="white" />
                        <LocalText>{humidity}%</LocalText>
                        <TextInfo>Humitity</TextInfo>
                 </ContainerInfo>

                    <ContainerInfo>
                        <Ionicons name="water-sharp" size={24} color="white" />
                        <LocalText>87%</LocalText>
                        <TextInfo>rain</TextInfo>
                    </ContainerInfo>

                </ContentInfo>

            </AtualCityVisualizer>

            {/* <ListLocations /> */}
            {/* <Card city={city} />
            <Info /> */}

        </Container>
    )
}

export default Home;