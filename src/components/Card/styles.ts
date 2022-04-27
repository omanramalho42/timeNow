import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;
`;
 
export const CardContainer = styled.View`

`;

export const CardContent = styled.View`
    display: flex;
    align-items: center;

    padding: 15px;
    border-radius: 15px;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Location = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFPercentage(3)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Turno = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFPercentage(2)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const IconVisualizer = styled.View`
    padding: 10px;
`;
