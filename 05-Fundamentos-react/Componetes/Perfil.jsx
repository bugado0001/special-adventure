import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
 console.log(props)
 console.log(props.nome)
 console.log(props.idade)
 console.log(props.email)
 
    return (

    <View>
      <Text>nome:{props.nome}</Text>
      <Text>idade:{props.idade}</Text>
      <Text>email:{props.email}</Text>
     
    </View>
  )
}

const styles = StyleSheet.create({})