import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;

    border-radius: 15px;
    padding: ${RFPercentage(1)}px;

    background-color: ${({ theme }) => theme.colors.background};
`;