import React, { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { ContainerSearchBox, SearchBox } from './styles';

export const FilterBoxInput = () => {

    const [search, setSearch] = useState<string>('');

    return (
        <ContainerSearchBox>
            <SearchBox 
                value={search}
                onChangeText={(value: string) => setSearch(value)}
                placeholder='Pesquise aqui uma cidade...'
            />
            <FontAwesome5 name="search-location" size={24} color="white" />
        </ContainerSearchBox>
    )
}