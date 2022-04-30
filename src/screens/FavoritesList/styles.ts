import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    display: flex;

    border-radius: 15px;
    padding: ${RFPercentage(1)}px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const CardContainer = styled.View`
    display: flex;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFPercentage(5)}px;
    text-align: center;
`;
