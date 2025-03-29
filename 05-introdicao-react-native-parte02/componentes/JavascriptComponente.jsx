import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
  console.log("Executando o programa de maior ou menor de idade?")
    const nome = "Rafa"
    const idade = 22
    
  function MaiorDeIdade(){
if(idade >= 18){
return "Maior de idade"

}else{ 
    return "Menor de idade"
}

  }
  
  function alerta(){
    alert("CLICOU NO BOTÃO!!!")
  }
    return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text>Maior ou menor: {MaiorDeIdade()}</Text>
      <Button title='Clica' onPress={alerta}></Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    backgroundColor: "yellow"
}


})