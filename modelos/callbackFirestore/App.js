import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import firebaseConnect from './callbacks/firestoreConnect';
import readData from './callbacks/readData';
import { useEffect, useState } from 'react';

export default function App() {
  const [buttonColor, setButtonColor] = useState();
  useEffect(() => {
    const getColors = async () => {
      const data = await readData();
      setButtonColor(data);
    }
    getColors()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        {<CustomButton buttonColor={buttonColor} />}
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
