import React from 'react';

import { Switch } from 'react-native';

import { Container } from './styles';

interface HeaderProps {
    enable: boolean;
    handleToggleTheme: () => void;
}

export const Header = ({ handleToggleTheme, enable }: HeaderProps) => {
    return (
        <Container>
            <Switch
                trackColor={{ false: "#767577", true: "#525252" }}
                thumbColor={enable ? "#1cf100" : "#f4f3f4"} 
                ios_backgroundColor="#3e3e3e"
                value={enable}
                onChange={handleToggleTheme} 
            />
        </Container>
    )
}