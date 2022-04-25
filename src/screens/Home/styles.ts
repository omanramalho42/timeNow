import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    justify-content: center;

    margin: auto;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }) => theme.colors.text};
`;