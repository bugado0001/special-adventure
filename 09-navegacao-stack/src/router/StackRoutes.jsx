import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/Profilescreen"
import ConfigScreen from "../screens/ConfigScreen"
import React from 'react'

//Import do stark
import { createStackNavigator } from '@react-navigation/stack'

export default function StackRoutes() {
  return (
  <Stack.Navigator>
<Stack.Screen name="HomeScreen" 
component={HomeScreen}
opitions
/>
<Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
<Stack.Screen name="ConfigScreen" component={ConfigScreen}/>


  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})