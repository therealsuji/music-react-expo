import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Whats up  SUJI!!');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='enter something' style={styles.input} />
      </View>
      <Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('we just changed the text')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  input: {
    padding: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
``