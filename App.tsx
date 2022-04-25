import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './src/styles/theme';

import Home from './src/screens/Home'
import { useState } from 'react';
import { DefaultTheme } from 'styled-components/native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  const [toggleTheme, setToggleTheme] = useState<DefaultTheme>(darkTheme);

  return (
    <ThemeProvider theme={toggleTheme}>
      <Home />
      <StatusBar />
    </ThemeProvider>
  );
}
