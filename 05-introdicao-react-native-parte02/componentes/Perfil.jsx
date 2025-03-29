import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
  console.log(props)



    return (
    <View style ={styles.conteine}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>Nome: {props.nome}</Text>
      <Text style={styles.texto}>Idade: {props.idade}</Text>
      <Text style={styles.texto}>Email: {props.email} </Text>
      <Text style={styles.texto}>Telefone: {props.telefone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
conteine: {
    backgroundColor: "blue",

},

texto:{
color: "white",
fontWeight: 900,
fontSize: 50,

}



})