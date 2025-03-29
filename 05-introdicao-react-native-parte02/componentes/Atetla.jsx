import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Atetla(props) {

const Atleta = {nome, idade, imagem} = props

  return (
    <View>
      <Text>Atetla</Text>
      <Text>NOME:{}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Atetla</Text>
    </View>
  )
}

const styles = StyleSheet.create({})