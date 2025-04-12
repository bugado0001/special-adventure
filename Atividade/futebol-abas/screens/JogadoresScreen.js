// Lista
import React from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Card } from "react-native-paper";
import { jogadores } from "../data";

export default function JogadoresScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} style={styles.img} />
      <Card.Content>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.number}>Número: {item.numero}</Text>
      </Card.Content>

    </Card>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  img: {
    height: 400,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: 'center'
  },
  number: {
    fontSize: 16,
    color: "#666",
    textAlign: 'center'
  },
})