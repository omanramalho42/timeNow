import { useEffect } from "react";

import { IconView, Icon } from './styles';

interface SkyProps {
    dataSky: {
        sky: "clear sky" | "few clouds" | "scattered clouds" | "broken clouds" | "shower rain" | "rain" | "thunderstorm" | "snow" | "overcast clouds" | "mist";
        icon: "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "05d" | "05n" | "06d" | "06n" | "07d" | "07n" | "08d" | "08n" | "09d" | "09n" | "10d" | "10n" | "11d" | "11n" | "13d" | "13n" | "50d" | "50n";
    }
}

export const TimeIconSky = ({ dataSky }: SkyProps) => {

    const { sky, icon } = dataSky;

    useEffect(() => {
        console.log("sky icon:");
        console.log(icon);
        console.log("description sky:");
        console.log(sky);

    },[icon, sky]);

    if(icon === "01d" && sky === "clear sky") {
        return (
            <Icon>🌞</Icon>  
        )
    }
    if(icon === "01d" && sky === "broken clouds") {
        return (
            <Icon>🌥</Icon>  
        )
    }
    if(icon === "02d" && sky === "clear sky") {
        return (
            <Icon>🌞</Icon>  
        )
    }
    if(icon === "02d" && sky === "few clouds") {
        return (
            <Icon>🌥</Icon>  
        )
    }
    if(icon === "03d" && sky === "clear sky") {
        return (
            <Icon>🌞</Icon>  
        )
    }
    if(icon === "03d" && sky === "few clouds") {
        return (
            <Icon>🌥</Icon>  
        )
    }
    if(icon === "03d" && sky === "broken clouds") {
        return (
            <Icon>🌤</Icon>     
        )
    }
    if(icon === "03d" && sky === "scattered clouds") {
        return (   
            <Icon>🌤</Icon>
        )
    }
    if(icon === "04d" && sky === "clear sky") {
        return (
            <Icon>🌞</Icon>  
        )
    }
    if(icon === "04d" && sky === "few clouds") {
        return (
            <Icon>🌥</Icon>  
        )
    }
    if(icon === "04d" && sky === "broken clouds") {
        return (
            <Icon>🌤</Icon>
        )
    }
    if(icon === "04d" && sky === "scattered clouds") {
        return (
            <Icon>🌤</Icon>
        )
    }
    if(icon === "01n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "02n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "03n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "03n" && sky === "scattered clouds") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "04n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "04n" && sky === "overcast clouds") {
        return (
            <Icon>☁</Icon>  
        )   
    }
    if(icon === "04n" && sky === "broken clouds") {
        return (
            <Icon>☁</Icon>  
        )   
    }
    if(icon === "04n" && sky === "scattered clouds") {
        return (
            <Icon>🌜</Icon>  
        )   
    }
    if(icon === "05n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "06n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "07n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "08n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "09n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "09n" && sky === "broken clouds") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "09n" && sky === "shower rain") {
        return (
            <Icon>🌧</Icon>  
        )   
    }
    if(icon === "10n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "10n" && sky === "broken clouds") {
        return (
            <Icon>🌙</Icon>  
        )   
    }
    if(icon === "11n" && sky === "clear sky") {
        return (
            <Icon>🌙</Icon>  
        )   
    }

    return (
    
        <Icon>🔥</Icon>
    
    )

}