import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 10px;

    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentInfo = styled.View`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    padding: 20px;
`;

export const ContainerInfo = styled.View`
    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 0 30px;
`;


export const AtualCityVisualizer = styled.View`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    padding: 10px 0;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 10px;
`;

export const HeaderCard = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;
    /* justify-content: space-around; */
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFPercentage(4)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Temperature = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(10)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Local = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;
`;

export const LocalText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFPercentage(3)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const OverView = styled.View`
    display: flex;
    flex-direction: row;

    border-radius: 33px;
 
    margin-top: 5px;
    padding: 3px 8px;

    justify-content: space-between;
    border: ${RFPercentage(0.1)}px solid ${({ theme }) => 
        theme.colors.info
    };
`;

export const IconView = styled.Text`
    font-size: ${RFPercentage(20)}px;
`;

export const TextInfo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFPercentage(1.7)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Data = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFPercentage(2)}px;
    color: ${({ theme }) => theme.colors.text};
`;
