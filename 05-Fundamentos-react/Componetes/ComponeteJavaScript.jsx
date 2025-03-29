import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'



export default function ComponeteJavaScript() {
  const nome = "Rafa"
  const idade = 10

  function CheckMaiorIdade(){
    if (idade >= 18){
return "Maior de idade"

    }else{
        return "Maior de Idade"
    }

  
}

  function alerta(){
    alert("Clicou no botaão")
}



    return (
    <View>
      <Text>ComponeteJavaScript</Text>
 <Text>Nome: {nome}</Text>
 <Text>Idade: {idade}</Text>
 <Text>Idade +40:{idade + 40}</Text>
 <Text>Idade -40:{idade - 40}</Text>


    </View>
  )
}

const styles = StyleSheet.create({})