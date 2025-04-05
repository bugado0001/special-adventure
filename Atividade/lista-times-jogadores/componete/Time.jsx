import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time(props) {
  const { nome, anoFundacao, imagem, mascote, jogadores } = props;

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} />
      <Card.Content>
        <Text>Ano de Fundação: {anoFundacao}</Text>
        <Text>Mascote: {mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores} // Use jogadores, não mascote
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
          keyExtractor={(item) => item.numero.toString()} // Converte numero para string
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});