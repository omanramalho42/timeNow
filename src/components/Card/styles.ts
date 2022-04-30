import styled from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;
`;
 
export const CardContainer = styled.View`
    display: flex;
    flex-direction: column;

    align-items: center;

    border-radius: 15px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const CardContent = styled.View`
    display: flex;
    flex-direction: column;

    padding: ${RFPercentage(0.4)}px;

    align-items: center;
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

export const TextInfo = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    padding: 5px;
    margin: 0 5px;

    color: ${({ theme }) => theme.colors.text};
`;

export const IconVisualizer = styled.View`
    padding: ${RFPercentage(2)}px;;
`;

export const Temperature = styled.Text`
    font-size: ${RFPercentage(11)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    text-align: center;

    color: ${({ theme }) => theme.colors.text};
`;

export const ContentTemp = styled.View`
    display: flex;
    flex-direction: row;

    margin-bottom: ${RFPercentage(0.1)}px;
`;

export const Temp = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    margin: 0 ${RFPercentage(0.5)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TextDay = styled.Text`
    font-size: ${RFPercentage(2.4)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    color: ${({ theme }) => theme.colors.text};
`;

export const TextIcon = styled.Text`
    font-size: ${RFPercentage(3)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    color: ${({ theme }) => theme.colors.text};
`;

export const ContentPreviousTemp = styled.View`
    display: flex;
    flex-direction: row;

    /* padding: 0 ${RFPercentage(2)}px; */
`;

export const ContentCard = styled.View`
    display: flex;
    flex-direction: column;

    padding: 5px;

    align-items: center;
`;

export const TableTemp = styled.View`
    display: flex;
    flex-direction: column;

    padding: ${RFPercentage(1)}px;

    width: 100%;
    margin: ${RFPercentage(.6)}px;
`;

export const CardTemp = styled.View`
    display: flex;    
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const Pagination = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;
