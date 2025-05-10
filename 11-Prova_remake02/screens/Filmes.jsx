// 
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Avatar, Button, Text } from 'react-native-paper'

export default function Filmes() {
  /*
  * Componente exportado com export default 
  significa que pode ser importado com em outros aquivos 
  
  *Componente retorna um JSX, que define a irterface visual da tela.
  */
  const filme = {
    titulo: "The Shawshank Redemption",
    imagem: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    local: "EUA",
    organizacao: "Castle Rock Entertainment",
    ano: 1994,
    descricao: "Melhor Filme (nomeação ao Oscar)",
  
  };


  return (
<View>
  <Card>
    <Card.Content>
      <Text variant="titleLarge">{filme.titulo}</Text>
     
    </Card.Content>
    <Card.Cover  source={{ uri: filme.imagem }} />
    <Card.Actions>
  <Text variant="bodyMedium">{filme.descricao}</Text>
    </Card.Actions>
  </Card>
</View>
   
  )
}

const styles = StyleSheet.create({})