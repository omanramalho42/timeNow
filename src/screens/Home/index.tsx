import React, { useEffect, useState } from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { Entypo, FontAwesome, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

import getCurrentWeather from '../../api/api';
import * as Location from 'expo-location';

import { TimeIconSky } from '../../components/TimeIconSky';

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
    HeaderCard,
} from './styles';

import AppLoading from 'expo-app-loading';

interface LocalTimeProps {
    altitude: number;
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

interface SkyProps {
    dataSky: {
        sky: "clear sky" | "few clouds" | "scattered clouds" | "broken clouds" | "shower rain" | "rain" | "thunderstorm" | "snow" | "mist" | undefined;
        icon: "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "05d" | "05n" | "06d" | "06n" | "07d" | "07n" | "08d" | "08n" | "09d" | "09n" | "10d" | "10n" | "11d" | "11n" | "13d" | "13n" | "50d" | "50n" | undefined;
    }
}

const Home = () => {

    const [translate, setTranslate] = useState(false);
    // LOCAL E MSG DE ERRO
    const [location, setLocation] = useState<LocalTimeProps>();
    const [errorMsg, setErrorMsg] = useState<string>("");

    //VARIAVEIS
    const [currentTemperature,setCurrentTemperature] = useState<any>();
    const [temperatureMin,setTemperatureMin] = useState<any>();
    const [temperatureMax, setTemperatureMax] = useState<any>();
    const [locationName, setLocationName] = useState<any>();
    const [wind, setWind] = useState<any>();
    const [humidity, setHumidity] = useState<any>();
    const [descriptionSky, setDescriptionSky] = useState<any>();
    const [currentIcon, setCurrenticon] = useState<any>();

    const [dataSky,setDataSky] = useState<SkyProps>({
        dataSky: {
            sky: descriptionSky,
            icon: currentIcon,
        }
    });

    async function getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
          } else {
            let location = await Location.getCurrentPositionAsync({})
            console.log("location coords home screen");
            console.log(location.coords);
            await setLocation(location.coords);
          }
    }

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
        await getLocation();
        // DATA CONTEM INFORMAÇÕES DA LOCALIZACAO PASSADA COMO PARAMETRO
        const data = await getCurrentWeather(location);
        // console.log("⚡");
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

    //ESTADO DE TEMPO
    const [time, setTime] = useState<any>();
    const [dataToday, setDataToday] = useState('');
    // FUNÇÃO QUE PEGA AS HORAS EXATAS
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    const getCurrentData = () => {
        var today: any = new Date();
        var date = "";

        let shortMonth = today.toLocaleString('en-us', { month: 'short' });
        let day = today.toLocaleDateString('en-us', { weekday: 'long' });;

        date = `${day}` + "  " + today.getDate() + " " +  shortMonth;
        return date;
    }

    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);

        setCurrentWeather();
        
        let dataToday = getCurrentData();
        setDataToday(dataToday);

    }, [translate]);
  
    let localTimeInfo = 'Waiting..';
    if (errorMsg) {
        localTimeInfo = errorMsg;
    } else if (location) {
      localTimeInfo = JSON.stringify(location);
    }

    // console.log(localTimeInfo);
    // console.log("time");
    // console.log(time);
    // console.log("data today:");
    // console.log(dataToday);

    console.log("localizacao: " + locationName);

    // if(locationName === undefined) {
    //     return <AppLoading />
    // }

    return (
        <Container>
            <AtualCityVisualizer>
                
                <TouchableOpacity onPress={() => handleActiveTranslate()}>
                    <MaterialIcons name="g-translate" size={24} color="white" />
                </TouchableOpacity>
                
                <HeaderCard>
                    <Local>
                        <Entypo name="location-pin" size={24} color="white" />
                        <LocalText>{locationName}</LocalText>
                    </Local>
                </HeaderCard>


                <OverView>
                    <TextInfo>{time}</TextInfo>
                </OverView>
                
                <IconView>
                    <TimeIconSky dataSky={dataSky} />
                </IconView>

                {/* <TouchableOpacity onPress={() => setCurrentWeather()}>
                    <FontAwesome name="refresh" size={24} color="white" />
                </TouchableOpacity> */}

                <Content>
                    <Temperature>
                        {currentTemperature} {translate ? "°C" : "°F"}
                    </Temperature>
                    <Title>
                        {descriptionSky}
                    </Title>
                    <Data>
                        {dataToday}
                    </Data>
                </Content>

                <ContentInfo>

                    <ContainerInfo>
                        <Feather name="wind" size={24} color="white" />
                        <LocalText>{wind}</LocalText>
                        <TextInfo>wind km/h</TextInfo>
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
        </Container>
    )
}

export default Home;