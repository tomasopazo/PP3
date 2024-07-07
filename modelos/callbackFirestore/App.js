import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import firebaseConnect from './callbacks/firestoreConnect';
import readData from './callbacks/readData';
import { useEffect, useState } from 'react';
import setData from './callbacks/setData';

export default function App() {
  const [colors, setColors] = useState();
  useEffect(() => {
    const getColors = async () => {
      const data = await readData();
      setColors(data);
    }
    getColors()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <CustomButton colors={colors}/>
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
