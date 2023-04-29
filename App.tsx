import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/Screens/HomeScreen";
import Categories from './src/Screens/Categories';
import CategoryEntry from './src/Screens/CategoryEntry';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="CategoryEntry" component={CategoryEntry} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

