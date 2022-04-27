import React from 'react';

import { Switch, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { 
    Container, 
    ContentToggle 
} from './styles';

interface HeaderProps {
    enable: boolean;
    handleToggleTheme: () => void;
}

export const Header = ({ 
    handleToggleTheme, 
    enable 
}: HeaderProps) => {
    
    return (
        <Container>
            
            <TouchableOpacity onPress={() => {}}>
                <AntDesign name="heart" size={24} color="red" />
            </TouchableOpacity> 

            <ContentToggle>
                <Switch
                    trackColor={{ false: "#767577", true: "#525252" }}
                    thumbColor={enable ? "#1cf100" : "#f4f3f4"} 
                    ios_backgroundColor="#3e3e3e"
                    value={enable}
                    onChange={handleToggleTheme} 
                />
            </ContentToggle>
            
            <TouchableOpacity onPress={() => {}}>
                <Ionicons name="add-circle" size={32} color="green" />
            </TouchableOpacity> 

        </Container>
    )
}