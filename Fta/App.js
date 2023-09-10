import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.mainContainer}>
     <View style={styles.homeTop}>
        {/* <Image 
          style={styles.headerImage} 
          source={require("./assets/splashh.png")}
        /> */}
        <Text style={styles.mainHeader}>Welcome To NewTrading App</Text>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
