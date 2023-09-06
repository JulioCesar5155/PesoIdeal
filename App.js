import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('170');
  const [idade, setIdade] = useState('25');
  const [kmRodados, setValorKm] = useState('100');
  const [resultadoH, setResultadoH] = useState('');

  const calcularPesoH = () => {
    const intAltura = parseFloat(altura);
    const intIdade = parseFloat(idade);
    const intKms = parseFloat(kmRodados);

    const intPesoH = intAltura - 100 - [(intAltura - 150) / 4] + (intIdade / 10)
    const consumo = intPesoH;
    setResultadoH(consumo.toFixed(2));
    Keyboard.dismiss();
  };

  const calcularPesoM = () => {
    const intAltura = parseFloat(altura);
    const intIdade = parseFloat(idade);
    const intKms = parseFloat(kmRodados);

    const intPesoM = intAltura - 100 - [(intAltura - 150) / 2.5] + (intIdade / 10)
    const consumo = intPesoM;
    setResultadoH(consumo.toFixed(2));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peso Ideal</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo</Text>

        <Pressable style={styles.button} onPress={calcularPesoH}>
        <Text style={styles.buttonText}>Masculino</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={calcularPesoM}>
        <Text style={styles.buttonText}>Feminino</Text>
      </Pressable>
      </View>

      {resultadoH !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Peso Ideal:</Text>
          <Text style={styles.resultText}>{resultadoH} Kg/s</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    width: 200,
    height: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});