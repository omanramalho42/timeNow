import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';


export const ContainerSearchBox = styled.View`
    display: flex;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};

    padding: ${RFPercentage(1.5)}px;

    border-width: ${RFPercentage(0.1)}px;
    border-radius: ${RFPercentage(3)}px;

    justify-content: space-between;

`;

export const SearchBox = styled.TextInput`
    width: 70%;
`;