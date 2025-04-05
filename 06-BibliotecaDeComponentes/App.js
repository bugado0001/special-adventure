import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Button, Card, Divider, PaperProvider, Paragraph, Title } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

export default function App() {
 
  const liste = ["Banana", "Maça", "Abacaxi"]
  
  return (
    <PaperProvider>
    <View style={styles.container}>  
   <Card>
  <Card.Content>
<FlatList
data = {lista}

/>

  </Card.Content>
   </Card>

      <StatusBar style="auto" />
    </View>
    </PaperProvider>
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
