import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TOPS 10 FILMES QUE INDICO!</Text>
<View style={styles.containerContent}>
<Image source={require('./FILMES MEUS/5781885.webp')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/20150812.jpg')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/20425650.webp')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/21036473_20130905212653924.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/download (2).jpg')} style={styles.imagens} />

</View>

<View style={styles.containerContent}>
<Image source={require('./FILMES MEUS/download (3).jpg')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/download (5).jpg')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/e13ee4b62d3db96de4569a439ec6257c_XL.jpg')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/OEspetacularHomemAranha2.webp')} style={styles.imagens} />
        <Image source={require('./FILMES MEUS/Spider-Man_3.jpg')} style={styles.imagens} />
</View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  containerContent:{
    flexDirection:"row",
    justifyContent: 'center'
  },

  imagens: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'row'
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});