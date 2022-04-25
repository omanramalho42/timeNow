import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { Container, Title, Temperature, Location } from './styles'

interface CityProps {
    location: string,
    temperature: number,
    rain?: number,
    wind?: number;
    clouds?: boolean;
    icon: string,
    favorite?: boolean;
}

const Home:React.FC = () => {
    
    const [favorite, setFavorite] = useState<boolean>(false);
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

    useEffect(() => {
        try{ 
            setCitys([
                ...citys,
                {
                    location: 'Curitiba',
                    temperature: 25,
                    icon: 'cwb',
                    favorite: false
                }
        ]);
        } catch(err) {
            console.log(err);
        }
    },[]);

    return (
        <Container>
            <Title>
                Time Now 🌥
            </Title>
            <Temperature>
                27° C
            </Temperature>
            <Location>
                Fortaleza, Ceará, Brasil.
            </Location>
            <Card citys={citys} />
        </Container>
    )
}

export default Home;