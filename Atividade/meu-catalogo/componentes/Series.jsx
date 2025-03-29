import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Serie(props) {


console.log(props)

const {nome, ano, diretor, temporada, capa} = props
 
  return (
    
    <View style ={styles.container}>
      <Text style ={styles.text} >Filme</Text>


      <Text style ={styles.text}>Nome: {props.nome}</Text>
      <Text style ={styles.text}>Ano: {props.ano}</Text>
      <Text style ={styles.text}>Temporada: {props.temporada}</Text>
      <Text style ={styles.text}>Tipo: {props.tipo}</Text>
     
     
        <Image
      source={{uri: props.capa}}
      style = {{
        height: 200,
        width: 200


      }}
      />
   
    </View>
  )
}

const styles = StyleSheet.create({


        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f5f5f5',
          margin: 10,
          borderWidth: 2
        },
        text: {
          fontSize: 18,
          color: '#333',
          textAlign: 'center',
        },
        button: {
          marginTop: 10,
          padding: 10,
          backgroundColor: '#007bff',
          borderRadius: 5,
        },
        buttonText: {
          color: '#fff',
          fontSize: 16,
          textAlign: 'center',
        },
      });
      

