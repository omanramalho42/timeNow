import React, { useEffect, useState } from 'react';

import { getDatabase, remove, ref } from "firebase/database";

import { View , TouchableOpacity, ScrollView } from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { 
    Container, 
    CardContainer, 
    CardContent, 
    Location, 
    Turno,
    Temperature,
    ContentTemp,
    Temp,
    TextInfo,
    TextDay,
    TextIcon,
    IconVisualizer,
    ContentCard,
    ContentPreviousTemp,
    TableTemp,
    CardTemp,
    Pagination,
} from './styles';

interface FavoriteProps {
    favorite: {
        id: string,
        location: {
            lat: number;
            lng: number;
        },
        favorite: boolean;
    }
}

interface CardTempProps {
    day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sabado" | "Domingo";
    rain: string;
    maxTemp: string;
    minTemp: string;
}

interface PreviuousTempProps {
    hour: string;
    icon: string;
    temperature: string;
}

interface LocalTimeProps {
    altitude?: string;
    altitudeAccuracy?: number;
    lat: number;
    accuracy?: number;
    lng: number;
    heading?: number;
    speed?: number;
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

export const Card = ({ favorite } : FavoriteProps) => {

    const [previousTemp, setPreviousTemp] = useState<PreviuousTempProps[]>([
        {
            hour: "agora",
            icon: "🌙",
            temperature: "27°",
        },
        {
            hour: "21",
            icon: "🌙",
            temperature: "28°",
        },
        {
            hour: "22",
            icon: "⛈",
            temperature: "25°",
        },
        {
            hour: "23",
            icon: "⚡",
            temperature: "24°",
        },
        {
            hour: "00",
            icon: "⛈",
            temperature: "23°",
        },
        {
            hour: "01",
            icon: "☁",
            temperature: "22°",
        },
        {
            hour: "02",
            icon: "⛈",
            temperature: "21°",
        },
    ]);

    const [cardtemp, setCardTemp] = useState<CardTempProps[]>([
        {
            day: "Segunda",
            rain: "⛈ 60%",
            maxTemp: "25 °C",
            minTemp: "31 °C",
        },
        {
            day: "Terça",
            rain: "⛈ 40%",
            maxTemp: "22 °C",
            minTemp: "29 °C",
        },
        {
            day: "Quarta",
            rain: "⛈ 10%",
            maxTemp: "12 °C",
            minTemp: "19 °C",
        },
        {
            day: "Quinta",
            rain: "⛈ 40%",
            maxTemp: "22 °C",
            minTemp: "30 °C",
        },
        {
            day: "Sexta",
            rain: "⛈ 20%",
            maxTemp: "22 °C",
            minTemp: "29 °C",
        },
        {
            day: "Sabado",
            rain: "⛈ 40%",
            maxTemp: "22 °C",
            minTemp: "29 °C",
        },
        {
            day: "Domingo",
            rain: "⛈ 40%",
            maxTemp: "22 °C",
            minTemp: "29 °C",
        },
    ]);

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
        // DATA CONTEM INFORMAÇÕES DA LOCALIZACAO PASSADA COMO PARAMETRO
        const data = await getCurrentWeather(favorite.location);
        console.log("localizaçao screen favorites");
        console.log(favorite.location);
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

    const handleRemoveFavorite = async () => {
        const db = await getDatabase();
        remove(ref(db, 'favorite/'));
        alert("cidade removida da lista");
    }

    useEffect(() => {
        setCurrentWeather();
        console.log("favorites citys");
        console.log(favorite);
        // console.log("CARD DATA TEMP PREVIOUS: ");
        // console.log(cardtemp);

    },[cardtemp, favorite, translate]);

    if(favorite === null) {
        return (
            <View style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}
            >
                <Ionicons 
                    name="warning" 
                    size={24} 
                    color="red" 
                />
                <TextInfo style={{ 
                        textAlign: 'center' 
                    }}
                >
                    Você ainda não possuí nenhuma
                     cidade adicionada como favorita
                </TextInfo>
            </View>
        )
    }

    return (
        <Container>
            {[favorite].map(( item,index ) => item && (
                <View style={{ display: 'flex',  flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleActiveTranslate()}>
                        <MaterialIcons name="g-translate" size={24} color="white" />
                    </TouchableOpacity>
                    <TextInfo key={index} style={{ textAlign: 'center' }}>
                        {/* { JSON.stringify(item.id) } */}
                        Remover dos favoritos
                    </TextInfo>
                    <TouchableOpacity onPress={() => handleRemoveFavorite() }>
                        <Ionicons name="ios-remove-circle" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            ))}

            <CardContainer>
                
                <CardContent>
                    
                    <Location>
                        {locationName}
                    </Location>
                    <TextInfo>
                        {descriptionSky}
                    </TextInfo>

                    <Temperature>
                        {currentTemperature} {translate ? "°C" : "°F"}
                    </Temperature>
                    <ContentTemp>
                        <Temp>Máx: {temperatureMax} °C</Temp>
                        <Temp>Min: {temperatureMin} °C</Temp>
                    </ContentTemp>

                </CardContent>
                
                <ContentPreviousTemp>
                    <ScrollView horizontal={true}>
                        {previousTemp.map((item, index) => item && (
                        <ContentCard key={index}>
                            <TextInfo>
                                {item.hour}
                            </TextInfo>
                            <TextIcon>
                                {item.icon}
                            </TextIcon>
                            <TextInfo>
                                {item.temperature}
                            </TextInfo>
                        </ContentCard>                        
                    ))}
                    </ScrollView>
                </ContentPreviousTemp>

                <TableTemp>
                    {/* <ScrollView> */}
                        {cardtemp.map((item, index) => item && (
                            <CardTemp key={index}>
                                <TextDay>{item.day}</TextDay>
                                <TextInfo>{item.rain}</TextInfo>
                                <TextInfo>{item.maxTemp}</TextInfo>
                                <TextInfo>{item.minTemp}</TextInfo>
                            </CardTemp>
                        ))}
                    {/* </ScrollView> */}
                </TableTemp>

                <Pagination>
                    <TextInfo>°</TextInfo>
                    <TextInfo>°</TextInfo>
                    <TextInfo>°</TextInfo>
                    <TextInfo>°</TextInfo>
                    <TextInfo>°</TextInfo>
                </Pagination>

            </CardContainer>
        </Container>
    )
}