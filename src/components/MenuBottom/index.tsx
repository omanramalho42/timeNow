import { StyleSheet } from 'react-native';

import { BlurView } from 'expo-blur';

import { AntDesign, Ionicons, Fontisto  } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavoritesList from '../../screens/FavoritesList';
import Home from '../../screens/Home';
import SearchCity from '../../screens/SearchCity';

const Tab: any = createBottomTabNavigator();

export const MenuBottom = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions = {{
            tabBarActiveTintColor: '#e91e63',
            showLabel: false,
            tabBarStyle: {
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundColor: 'black',
              height: 50,
            },
            tabBarBackground: () => (
              <BlurView tint="dark" intensity={ 100 } style={StyleSheet.absoluteFill} />
            ),
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: any) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesList}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }: any) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tab.Screen 
        name="Create" 
        component={SearchCity}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }: any) => (
            <Ionicons name="create" size={size} color={color} />
          )
        }} 
      />

    </Tab.Navigator>
  );
}