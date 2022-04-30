import React, { useEffect, useState } from 'react'

import axios from 'axios';

import Geocoder from 'react-native-geocoding';

import { SafeAreaView, StyleSheet } from 'react-native';

import { Container } from './styles';

import { MapInput } from '../../components/MapInput';
import { Map } from '../../components/Map';
import { Info } from '../../components/Info';

interface FavoriteCitysProps {
  // favoriteCitys: {
    id: number;
    location: {
      lat: number; 
      lng: number;
    },
    favorite: boolean;
  // }
}

const SearchCity = () => {

  const [coordRegion, setCoordRegion] = useState();
  const [local, setLocal] = useState({
    region: null
  });

  const [search, setSearch] = useState("");

  const handleSetSearch = (location: any) => {
    setSearch(location);
  }

  const handleSearchLocation = (region: any) => {
    setLocal(region);
  }
  
  useEffect(() => {
    Geocoder.init("AIzaSyBlOfhbSZQDK0xlWmRDM0F3SfNzRBi1Nvs", {language : "pt-br"});
    const exampleSearch = search.replace("," , "+");

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${exampleSearch},+CA&key=AIzaSyBlOfhbSZQDK0xlWmRDM0F3SfNzRBi1Nvs`)
      .then((res) => setCoordRegion(res.data.results[0].geometry.location))
      .catch((err) => console.log(err))

    console.log("search city: ");
    console.log(search);
    console.log("Region search");
    console.log(coordRegion);

  },[local, search]);

  return (
      <SafeAreaView>
    
        <Container>

            <MapInput onChange={handleSetSearch} />
            <Map onChange={handleSearchLocation} coordRegion={coordRegion} />

        </Container>

        <Info geoLocation={coordRegion} />
      
      </SafeAreaView>
  )
}

export default SearchCity;

export const styled = StyleSheet.create({
  searchBox: {
    backgroundColor: '#000',
    borderRadius: 15,
  }
})