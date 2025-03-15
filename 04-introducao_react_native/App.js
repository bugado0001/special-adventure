import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nome = "Pedro!"
  
    
  function alerta () {
  // retornos com jsx
  alert("clico oooo")}

  
  return (
    
    <View style={styles.container}>
      <StatusBar style='auto'/> 
      <Text> Texto dentro</Text>
      <Text>Bem vindo {nome}</Text>
      <Text>{2+2}</Text>
     <Button title='clicar' onPress={alerta}></Button>
     
      </View>
  );
}



// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});