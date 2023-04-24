import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/Screens/HomeScreen";
import GetData from './src/Components/GetData';
import Categories from './src/Screens/Categories';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

