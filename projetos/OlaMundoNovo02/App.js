import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dadosVisiveis, setDadosVisiveis] = useState(false);

  const handleEnviar = () => {
    setDadosVisiveis(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite seus Dados:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={setEndereco}
        value={endereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={setTelefone}
        value={telefone}
      />

      <Button title="Enviar" onPress={handleEnviar} />

      {dadosVisiveis && (
        <>
          <Text style={styles.titulo}>Função</Text>
          <OlaPerfilFuncao
            nome={nome}
            endereco={endereco}
            telefone={telefone}
          />
          <Text style={styles.titulo}>Classe</Text>
          <OlaPerfilClasse
            nome={nome}
            endereco={endereco}
            telefone={telefone}
          />
        </>
      )}
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
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
});