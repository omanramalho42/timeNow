import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;
    flex: 1;
    
    margin: 20px 0;
    padding: 10px;

    align-items: center;

    border-radius: 15px;
    background-color:${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    
    margin-top: 20px;

    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color:${({ theme }) => theme.colors.text}
`;

export const TextInfo = styled.Text`
    font-size: ${RFPercentage(2)}px;
    color:${({ theme }) => theme.colors.text}
`;