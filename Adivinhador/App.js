import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [targetNumber] = useState(Math.floor(Math.random() * 20) + 1);

  const handleCheck = () => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      Alert.alert('Digite um número válido');
      return;
    }

    if (guess === targetNumber) {
      Alert.alert('Parabéns!', 'Você acertou o número!');
      setAttempts(5);
      setInput('');
    } else {
      const newAttempts = attempts - 1;

      if (newAttempts === 0) {
        Alert.alert('Game Over', `Você perdeu! O número era ${targetNumber}`);
        setAttempts(5);
      } else {
        Alert.alert('Errou!', guess > targetNumber ? 'Tente um número menor' : 'Tente um número maior');
        setAttempts(newAttempts);
      }

      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Adivinhe o número</Text>

      <View style={styles.section}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={input}
          onChangeText={setInput}
          placeholder="Digite um número de 1 a 20"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.section}>
        <View style={styles.buttonContainer}>
          <Button title="Verificar" onPress={handleCheck} color="#1e90ff" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.attempts}>Tentativas restantes: {attempts}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 40,
  },
  section: {
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  attempts: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
});
