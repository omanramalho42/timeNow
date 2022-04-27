import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
    Container, 
    CardContainer, 
    CardContent, 
    Location, 
    Turno,
    IconVisualizer
} from './styles';

interface Props {
    city: {
        location: string;
        icon: string;
        turno: string;
    }
}

export const Card = ({ city }: Props) => {
    
    const Icon = ({city}: Props) => {
        if(city.icon === "sun") {
            return (<Feather name="sun" size={24} color="yellow" />)
        }else if (city.icon === "sunset") {
            return (<Feather name="sunset" size={24} color="yellow" />)
        } else if(city.icon === "mooon") {
            return (<Feather name="moon" size={24} color="blue" />)
        } else {
            return null;
        }
    }
 
    return (
        <Container>
            <CardContainer>
                
                <CardContent>
                    <Location>
                        {city.location}
                    </Location>
                    
                    <IconVisualizer>
                        <Icon city={city} />
                    </IconVisualizer>

                    <Turno>
                        {city.turno}
                    </Turno>
                </CardContent>

            </CardContainer>
        </Container>
    )
}