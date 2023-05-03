import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import React,{useEffect,useState} from 'react';

export default function App() {
  const [name, setName] = useState("");

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  useEffect(()=>(listAllVoiceOptions),[]);

  const speakGreeting = () => {
      const greeting = `${name}`;
      const options = {
        voice: "com.apple.speech.synthesis.voice.Fred",
        pitch: .9,
        rate: 0.7
      };
      Speech.speak(greeting, options)
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Button title="Speak" onPress={speakGreeting} />
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

  input: {
    alignSelf: 'stretch',
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    margin: 8
  }
});