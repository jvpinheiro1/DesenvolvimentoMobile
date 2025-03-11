import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao'; // importa componente OlaMundo
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao nome=" João Vitor" endereco=" São Carlos - SP" telefone=' +55 (16)98865-5270' />
      <br></br>
      <OlaPerfilClasse nome=" João Vitor" endereco=" São Carlos - SP" telefone=' +55 (16)98865-5270' />
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
