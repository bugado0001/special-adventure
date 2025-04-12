import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";
import React from "react";

export default function HomeScreen() {
  return (
    <View>
      <Text variant="headlineLarge" style={{ textAlign: "center" }}>
        Tela Inicial
      </Text>
      <Card style={{ width: 90 }}>
        <Card.Content>
          <Title>Um titulo</Title>
          <Paragraph>
            Um paragrafo lorem lorem lorem lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias reprehenderit tempora
            aliquam? Inventore fugiat error laboriosam magni unde numquam?
            Dignissimos exercitationem ipsam, possimus ut pariatur molestias
            laboriosam veniam numquam eum.
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
