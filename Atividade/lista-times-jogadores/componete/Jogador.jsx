import { StyleSheet } from 'react-native';
import React from 'react';
import { Avatar, Card } from 'react-native-paper';

export default function Jogador(props) {
  const { nome, imagem, numero } = props;

  return (
    <Card.Title
      title={nome}
      subtitle={numero.toString()} // Use subtitle em vez de text
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  );
}

const styles = StyleSheet.create({});