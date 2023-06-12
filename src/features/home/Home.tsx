import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import { selectUser } from './homeSlice';

/*
      Home Page
      Have a little profile tab which shows name and current build
      Under that, you offer Hunter's Manual(Categories) tab 
*/
 
export function Home() {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch();

  return(
    <View>
        <Text>Home Page</Text>
        <View>
          <Text>This View Box will be used for Profile display</Text>
          <Text>Initial display will be of a Add Hunter button which will launch a modal</Text>
          <Text>Modal will ask if they'd like to add name + armor set</Text>
        </View>
        <View>
          <Text>This could be a 'Prepare for Hunt' menu that shows comparisons and suggested tips</Text>
        </View>
        <View>
          <Text>This View Box will contain the Chapters(Categories) menu</Text>
        </View>
    </View>
  )
}    