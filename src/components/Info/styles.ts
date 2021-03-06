import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;
    
    margin: ${RFPercentage(1)}px 0;
    padding: ${RFPercentage(1)}px;;

    align-items: center;

    border-radius: 15px;
    background-color:${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    
    margin-top: ${RFPercentage(0.5)}px;

    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color:${({ theme }) => theme.colors.text};
`;

export const TextInfo = styled.Text`
    font-size: ${RFPercentage(2)}px;
    color:${({ theme }) => theme.colors.text};
`;

export const IconView = styled.Text`
    margin-top: ${RFPercentage(1)}px;
    font-size: ${RFPercentage(5)}px;
    color:${({ theme }) => theme.colors.text};
`;


