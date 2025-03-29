import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';

export default function App() {


  function alerta() {
    alert("Gol do Kaká")
  }


  return (
    /*Javascript */



    <ScrollView>
      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjUFd1XkKuwppHqQhFDADMSYweTTtcKFo4w&s'
          }}

          style={{
            marginTop: 100,
            height: 300,
            width: 300
          }}


        />

        <StatusBar style="auto" />
        <Text style={{ fontSize: 50, marginTop: 10, marginVertical: 10 }}>KAKÁ</Text>
        <Button title='Gol?' onPress={alerta}></Button>


        <Text style={{ fontSize: 20, marginTop: 10 }}>Ricardo Izecson dos Santos Leite, mais conhecido
          como Kaká, é um ex-futebolista brasileiro que atuava como meio-campista.</Text>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxnyRbUaP7UOCxmDHxjBKZ1Mle5PW-gI38A&s'
          }}

          style={{
            marginTop: 10,
            height: 300,
            width: 300
          }}
        />

        <Image
          source={{
            uri: 'https://tmssl.akamaized.net/images/foto/galerie/kaka-brasilien-1621020964-62490.jpg'
          }}

          style={{
            marginTop: 10,
            height: 300,
            width: 300
          }}


        />
        <Image
          source={{
            uri: 'https://s2-oglobo.glbimg.com/IFAreqsW7KhpRDzY52sCTIxJipE=/0x0:558x425/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/3/V/kzv5aVTZqw08tfg5DovA/whatsapp-image-2024-02-07-at-04.34.33.jpeg'
          }}

          style={{
            marginTop: 10,
            height: 300,
            width: 300
          }}


        />
        <Image
          source={{
            uri: 'https://cdn.folhape.com.br/upload/dn_arquivo/2018/08/kaka.jpg'
          }}

          style={{
            marginTop: 10,
            height: 300,
            width: 300
          }}


        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuy_QFta_v2uZkA67_NQmqpoUtKCoraWV1zA&s'
          }}

          style={{
            marginTop: 10,
            height: 300,
            width: 300
          }}


        />



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
