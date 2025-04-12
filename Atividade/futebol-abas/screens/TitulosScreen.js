// Listar
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { titulos } from "../data";
import { Card } from "react-native-paper";

export default function TitulosScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.years}>Anos: {item.anos.join(", ")}</Text>
      </Card.Content>
    </Card>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  years: {
    fontSize: 16,
    color: "#666",
  },
});
