import styled from "styled-components/native"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    display: flex;
`;

export const CardContainer = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin: 5px 0;
    padding: 5px;

    border-radius: 15px;
    background-color:${({ theme }) => theme.colors.background} ;
`;

interface ContentProps {
    turno?: 'manha' | 'tarde' | 'noite';
}

export const Content = styled.View<ContentProps>`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme, turno }) => 
        turno === 'manha' 
        ? theme.colors.info 
        : turno === 'tarde' 
        ? theme.colors.effect
        : turno === 'noite'
        ? theme.colors.secondary_effect
        : theme.colors.background
    };

    border-radius: ${RFPercentage(3)}px;

    align-items: center;
    margin: ${RFPercentage(0.8)}px;

    padding: ${RFPercentage(1)}px;
    min-width: 105px;
`;

export const ContentFilter = styled.View`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: ${RFPercentage(3)}px;

    align-items: center;
    margin: auto;

    padding: ${RFPercentage(1)}px;
`;

export const Location = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFPercentage(3)}px;
`;

export const Turno = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFPercentage(2.75)}px;
`;

export const ContainerSearchBox = styled.View`
    display: flex;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};

    margin: 15px 10px;

    padding: ${RFPercentage(1.5)}px;

    border-width: ${RFPercentage(0.1)}px;
    border-radius: ${RFPercentage(3)}px;

    justify-content: space-between;

    &:hover {
        border-color: ${({ theme }) => theme.colors.effect};
    }
`;

export const SearchBox = styled.TextInput`
    width: 70%;
`;