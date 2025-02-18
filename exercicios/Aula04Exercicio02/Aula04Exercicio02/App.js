import React, { useState } from 'react';
import {
  // Aqui eu importo todos os componentes que vamos usar no projeto inclusive o styleesheet para estilizar
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  // É instaciado a const app que recebera uma funcao para retornar
  const [nome, setNome] = useState(''); //Intancia o nom para armazenar o nome que o usuario digitara, e o set setará esse some na const
  const [mensagem, setMensagem] = useState(''); //Aqui a mesma coisa da de cima mas para exibir uma mensagem
  // função que sera chamada ao clicar no botao.
  const lidarComClique = () => {
    // Verifica se o nome foi preenchido, exibe a mensagem, caso contrário, pede para digitar o nome.
    if (nome) {
      setMensagem('Olá ' + nome + '!');
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    // View principal que irá conter todos os componentes da interface
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Caminho da imagem que sera exibida
        style={styles.logo} //estilo do logo
      />

      <Text style={styles.titulo}>Exemplo App Interativo</Text>

      <TextInput // input para nome
        style={styles.input} // estilo do input
        placeholder="Digite seu nome" // texto que ficara para indicar oque o usuario deve digitar
        onChangeText={setNome} // funcao que é chamada sempre que o input muda
        value={nome} // atribui o valor ao nome
      />
      {/* Botão nativo que executa a função 'lidarComClique' quando pressionado */}
      <Button title="Enviar" onPress={lidarComClique} />
      {/*personalizar o botao*/}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};
//definindo os estilos do app para ficar
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
