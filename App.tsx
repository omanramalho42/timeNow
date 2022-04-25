import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import Home from './src/screens/Home'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar />
    </ThemeProvider>
  );
}
