import React from 'react'
import { Container, Title, Temperature, Location } from './styles'

const Home:React.FC = () => {

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
        </Container>
    )
}

export default Home;