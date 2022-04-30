import React, { useState, useEffect } from "react";

import * as Location from 'expo-location';

import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import { View, SafeAreaView, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

import Geocoder from 'react-native-geocoding';

interface MapProps {
    onChange?: () => void;
    coordRegion?: {
        lat: number;
        lng: number;
    }
}

export const Map = ({ onChange, coordRegion }: MapProps) => {
    Geocoder.init("AIzaSyBlOfhbSZQDK0xlWmRDM0F3SfNzRBi1Nvs", {language : "en"});
    
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [region, setRegion] = useState<any>({
        latitude: 0,    // initial location latitude
        longitude: 0,  // initial location longitude
        latitudeDelta: 0,
        longitudeDelta: 0,
    });

    async function getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
          }else{
            let location = await Location.getCurrentPositionAsync({})

            if(coordRegion !== null) {
                await setRegion({
                    latitude: coordRegion.lat,
                    longitude: coordRegion.lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                });       
            } else {
                await setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                });
            }
          }
    }

    useEffect(() => {
        console.log("api");
        getLocation();
        console.log("regiao");
        console.log(region);
    },[coordRegion]);
    
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}		//destacando a localização do usuário no mapa
                showsMyLocationButton={false} 	//ocultando o botão que move o mapa para a localização do usuário
                toolbarEnabled={false}	//ocultando opções do google maps ao clicar em objetos do mapa
                style={ styled.map }
                loadingEnabled={true}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.4,
                    longitudeDelta: 0.0121
                }}
                onRegionChange={() => onChange(region)}
            >
                <Marker
                    onPress={() => {}}
                    tracksViewChanges={false}	//propriedade que melhora muito a performance do nosso aplicativo, mantendo os marcadores fixados no mapa e eliminando a renderização continua.
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,    
                    }}
                    title={"Title 1"}
                    description={"Description 1"}
                />
            </MapView>
        </View>
    )
}

export const styled = StyleSheet.create({
    map: {
        height: 200,
        borderRadius: 15,
        marginTop: 10,
    }
});
