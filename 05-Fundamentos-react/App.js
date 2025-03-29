import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componetes/PrimeitoComponente';
import SegundoComponete from './Componetes/SegundoComponente';
import ComponeteJavaScript from './Componetes/ComponeteJavaScript';
import Perfil from './Componetes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
<PrimeiroComponente></PrimeiroComponente>
<SegundoComponete></SegundoComponete>
<ComponeteJavaScript></ComponeteJavaScript>

<Perfil
nome = " rafael"
idade = {22}
email = "tudobugado@jsna.com"
/>

      <StatusBar style="auto" />
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
