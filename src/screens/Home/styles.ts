import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFPercentage(5)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Temperature = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(4.5)}px;
    
    color: ${({ theme }) => theme.colors.text};
`;

export const Location = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFPercentage(3)}px;
    
    color: ${({ theme }) => theme.colors.text};
`;