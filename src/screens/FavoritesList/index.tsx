import React from 'react';

import { getDatabase, ref, onValue, get, child } from "firebase/database";

import { Card } from '../../components/Card';

import { Container } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';

interface FavoriteProps {
  id: string,
  location: {
      lat: number;
      lng: number;
  },
  favorite: boolean;
}


const FavoritesList = () => {

  const [favorite, setFavorite] = useState<FavoriteProps[]>([
    {
      id: '',
      location: {
        lat: 0,
        lng: 0,
      },
      favorite: false,
    }
  ]);

  const getFavoritesCitys = async () => {
    

    const db = await getDatabase();
    const starCountRef = ref(db, 'favorite/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setFavorite(data);
    });

  }

  useEffect(() => { 
    getFavoritesCitys();

    // console.log("favorites citys");
    // console.log(favoriteCitys);
  },[]);

  return (
    
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        <Container key={favorite.id}>
          <Card favorite={favorite} />
        </Container>
      </ScrollView>
  )
}

export default FavoritesList