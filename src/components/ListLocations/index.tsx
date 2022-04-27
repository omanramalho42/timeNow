import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Feather, AntDesign, FontAwesome5  } from '@expo/vector-icons';

import { 
    Container, 
    CardContainer,
    Content,
    ContentFilter,
    Location,
    Turno,
    ContainerSearchBox,
    SearchBox
} from './styles';

// PROPRIEDADES DA CIDADE
interface CityProps {
    location: string;
    temperature: number;
    time?: string;
    rain?: number;
    wind?: number;
    clouds?: boolean;
    icon: string;
    favorite?: boolean;
}

//ARRAY DE CIDADES 
interface CardProps {
    citys: CityProps[];
}

export const ListLocations = () => {

    const [search, setSearch] = useState<string>('');
    const [citys, setCitys] = useState<CityProps[]>([
        {
            location: 'Fortaleza',
            temperature: 0,
            icon: '',
            favorite: false,
        },
        {
            location: 'Joinville',
            temperature: 0,
            icon: '',
            favorite: false,
        }
    ]);

    // SETANDO CIDADE COMO FAVORITO
    const handleSetFavorite = ({location, icon, temperature, favorite}: CityProps) => {
        citys.map((item) => item.location === location && (
            setCitys([
                ...citys,
                {
                    location: location,
                    favorite: !favorite,
                    icon: icon,
                    temperature: temperature,
                }
            ])
        )) 
        // citys.push({location, icon, temperature, favorite: !favorite});
        console.log(citys);
    }

    return (
      <Container>

            <ContainerSearchBox>
                <SearchBox 
                    value={search}
                    onChangeText={(value: string) => setSearch(value)}
                    placeholder='Pesquise aqui uma cidade...'
                />
                <FontAwesome5 name="search-location" size={24} color="white" />
            </ContainerSearchBox>

            {search !== "" ? citys.filter((item) => item.location.includes(search) ).map((item, index) => (
                <CardContainer key={index}>
                    <ContentFilter>
                        <Feather  name="sun" size={24} color="yellow" />
                        <Location>
                            {item.location}
                        </Location>

                        <Turno>
                            Tarde
                        </Turno>
                            
                        <TouchableOpacity
                            onPress={() => handleSetFavorite}
                        >
                            <AntDesign    
                                name={item.favorite ? 'heart' : 'hearto'} 
                                size={24} 
                                color="red" 
                            />
                        </TouchableOpacity>
                    </ContentFilter>
                </CardContainer>
            )) : (
              <View>
                {[citys.map((item, index) => item && (
                    <CardContainer key={index}>

                        <Content turno={"manha"}>
                             <Location>
                                {item.location}
                            </Location>

                            <Feather style={{ paddingVertical: 10}} name="sun" size={24} color="yellow" />

                            <Turno>
                                Manhã
                            </Turno>
                            
                            <TouchableOpacity
                                onPress={() => handleSetFavorite(item)}
                            >
                                <AntDesign    
                                    name={item.favorite ? 'heart' : 'hearto'} 
                                    size={24} 
                                    color="red" 
                                />
                            </TouchableOpacity>
                        </Content>

                        <Content turno='tarde'>
                            <Location>
                                {item.location}
                            </Location>
                            
                            <Feather style={{ paddingVertical: 10}} name="sun" size={24} color="yellow" />

                            <Turno>
                                Tarde
                            </Turno>
                            
                            <TouchableOpacity
                                onPress={() => handleSetFavorite(item)}
                            >
                                <AntDesign    
                                    name={item.favorite ? 'heart' : 'hearto'} 
                                    size={24} 
                                    color="red" 
                                />
                            </TouchableOpacity>
                        </Content>

                        <Content turno='noite'>
                            <Location>
                                {item.location}
                            </Location>

                            <Feather style={{ paddingVertical: 10}} name="sun" size={24} color="yellow" />

                            <Turno>
                                Noite
                            </Turno>
                            
                            <TouchableOpacity
                                onPress={() => handleSetFavorite(item)}
                            >
                                <AntDesign    
                                    name={item.favorite ? 'heart' : 'hearto'} 
                                    size={24} 
                                    color="red" 
                                />
                            </TouchableOpacity>
                        </Content>

                    </CardContainer>
                ))]}
            </View>
          )}
         
      </Container>
  );
}