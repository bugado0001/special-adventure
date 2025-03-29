// Imports
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

// Função que representa os componentes
export default function App() {
  const nome = "Rafael";

  function alerta() {
    alert("clique botão");
  }

  //Retorno dessa função com template do que vai ser
  /// Renderizado na tela (JSX)
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Css com StyleSheet */}
        <Text style={styles.textoGrande}>Texto StyleSheet</Text>

        {/* CSS inline */}
        <Text style={{ fontSize: 100 }}>open</Text>
        <Button title="ss" onPress={alerta}></Button>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRVufXCcWfY7HfUipsTWfWQ0XjTQUMnYH2w&s",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />

        <Image
          source={require("./image/images.jpg")}
          style={{
            height: 300,
            width: 300,
          }}
        />
        {/*   <StatusBar style="auto" />   */}
      </View>
    </ScrollView>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },

  textoGrande: {
    fontSize: 150,
  },
});
