import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen(props) {
  
    const {navigation, routs} = props
//Navega em outras telas 
    console.log("NAVIGATTON =>", navigation)

//Pegar os parametros de dados do rota    
    console.log("ROUTE =>", routs)
  
    return (
    <View>
      <Text>HomeScreen</Text>

      <Button
      mode='contained'
      onPress={()=> navigation.navigate("ProfileScreen")}
      >Ir para a tela profile</Button>
    </View>
  )
}

const styles = StyleSheet.create({})