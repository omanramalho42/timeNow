import React, { useState } from 'react';

import { View } from 'react-native';7

import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { lightTheme, darkTheme } from './src/styles/theme';
import { DefaultTheme } from 'styled-components/native';
import { ContainerApp } from './src/styles/global/style';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components';

import Home from './src/screens/Home';
import SearchCity from './src/screens/SearchCity';

import { Header } from './src/components/Header';
import FavoritesList from './src/screens/FavoritesList';
import { MenuBottom } from './src/components/MenuBottom';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [toggleTheme, setToggleTheme] = useState<DefaultTheme>(darkTheme);
  const [enable, setEnable] = useState(false);

  const handleToggleTheme = () => {
    if(toggleTheme === darkTheme) {
      try {
        setToggleTheme(lightTheme);
        setEnable(true);
      } catch (err) {
        console.log(err);
      }
    } else if(toggleTheme === lightTheme) { 
        try {
          setToggleTheme(darkTheme);
          setEnable(false);
        } catch (err) {
          console.log(err);
        }
    }
  }

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={toggleTheme}>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 5 }}>
        <ContainerApp>
          <StatusBar 
            animated={true} 
            backgroundColor='white'
          />
          
          <>
            <Header
              enable={enable} 
              handleToggleTheme={handleToggleTheme}
            />
          </>
          
          <NavigationContainer>
            <MenuBottom />
          </NavigationContainer>
          
        </ContainerApp>
      </SafeAreaView>
    </ThemeProvider>
  );
}
