import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const morseCodeMap = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': ' ', // Espace entre les mots
};

const textToMorse = (text) => {
  return text
    .toUpperCase()
    .split('')
    .map(letter => morseCodeMap[letter] || '')
    .join(' ');
};

export default function App() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');

  const handleTranslate = () => {
    setMorse(textToMorse(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Morse Code Translator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Translate" onPress={handleTranslate} />
      <Text style={styles.output}>{morse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
