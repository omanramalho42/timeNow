import React from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesome5 } from '@expo/vector-icons';

import { ContainerSearchBox } from './styles';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

interface MapInputProps {
    onChange?: () => any;
}

export const MapInput = ({ onChange }: MapInputProps) => {
  
  const [search, setSearch] = useState();

  useEffect(() => {
    console.log(search);
  },[search]);

  return (
    <ContainerSearchBox>
        <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder='Search'
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setSearch(data.description)
            // setSearch(data.description);
        }}
        query={{
            key: 'AIzaSyBlOfhbSZQDK0xlWmRDM0F3SfNzRBi1Nvs',
            language: 'pt-br',
        }}
        />
        <TouchableOpacity onPress={() => onChange(search)}>
          <FontAwesome5 name="search-location" size={24} color="black" />
        </TouchableOpacity>
    </ContainerSearchBox>
  )
}