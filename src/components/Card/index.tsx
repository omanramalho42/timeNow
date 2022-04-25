import React from 'react';

import { Text, View } from 'react-native';

import { Container } from './styles';

// PROPRIEDADES DA CIDADE
interface CityProps {
    location: string,
    temperature: number,
    rain?: number,
    wind?: number;
    clouds?: boolean;
    icon: string,
    favorite?: boolean;
}

//ARRAY DE CIDADES 
interface CardProps {
    citys: CityProps[];
}

export const Card = ({ citys }:CardProps) => {
   return (
      <Container>
          {[citys.map((item, index) => item && (
            <View key={index}>
                <Text>
                    {item.location}
                </Text>
            </View>
          ))]}
      </Container>
  );
}