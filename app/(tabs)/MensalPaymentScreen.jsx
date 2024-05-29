import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MensalPaymentScreen() {
  const navigation = useNavigation();

  const handlePayment = async () => {
    // Lógica para processar o pagamento
    alert('Pagamento Mensal Processado');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pagamento Mensal</Text>
      <TextInput style={styles.input} placeholder="Número do Cartão" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Data de Validade (MM/AA)" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pagar R$ 29,90 por Mês</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
