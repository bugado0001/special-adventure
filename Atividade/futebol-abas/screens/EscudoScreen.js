import { StyleSheet, View, Image } from 'react-native'
import { Card, Title } from "react-native-paper";
import React from 'react'
import { time } from '../data';

export default function EscudoScreen() {

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{time.nome} </Title>
          <Image
            source={{ uri: time.escudo }}
            style={styles.image}
            resizeMode="contain"
          />
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    elevation: 4,
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
    fontWeight: '500'
  },
  image: {
    width: "100%",
    height: 200,
  },
})