import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';

import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../Database';

import { Card } from '../../components/Card';

import { Container } from './styles';

interface FavoriteProps {
  id: string,
  location: {
      lat: number;
      lng: number;
  },
  favorite: boolean;
}[]

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

    
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `favorite/`)).then((snapshot) => {
    // if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     setFavorite(snapshot.val());
    // } else {
    //     alert("No data available");
    // }
    // }).catch((error) => {
    // console.error(error);
    // });
    // const myDoc = doc(database, "favoritos", "favorito");

    // getDoc(myDoc)
    //   .then((snapshot) => {
    //     if(snapshot.exists) {
    //       setFavorite(snapshot.data());
    //     } else {
    //       alert("Não existe nenhum registro");
    //     }
    //   }).catch((error) => {
    //     alert(error.message);
    //   })

  }

  useEffect(() => { 
    getFavoritesCitys();

    console.log("favorites citys");
    console.log(favorite);
  },[]);

  return (
    
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        <Container key={JSON.stringify(favorite)}>
          <Card favorite={favorite} />
        </Container>
      </ScrollView>
  )
}

export default FavoritesList