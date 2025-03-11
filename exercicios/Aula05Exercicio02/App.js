import React, { useState } from 'react'; // Importando o React e o useState para gerenciar os estados
import {
  View, // Vai ajudar a criar contêineres para os elementos
  Text, // Para mostrar textos na tela
  Image, // Para exibir imagens
  TextInput, // Campo de input para digitar texto
  Button, // Um botão simples
  TouchableOpacity, // Usado para criar botões personalizados
  ScrollView, // Para permitir rolar a tela caso o conteúdo ultrapasse
  FlatList, // Vai ser útil para renderizar uma lista de itens
  StyleSheet, // Para aplicar estilos
} from 'react-native'; // Importando as coisas do React Native

import logoX from './assets/NativeLogo.png'; // Importando uma imagem para o logo

// Função principal do App
const App = () => {
  const [text, setText] = useState(''); // Estado para armazenar o texto que o usuário digita
  const [items, setItems] = useState([]); // Estado para armazenar os itens da lista (vai ser uma lista de objetos)

  // Função que é chamada quando o botão de "Pressione-me" é clicado
  const handlePress = () => {
    alert('Botão pressionado!'); // Exibe um alerta
  };

  // Função para adicionar um item na lista
  const addItem = () => {
    if (text.trim() !== '') {
      // Só vai adicionar se o texto não estiver vazio
      setItems([...items, { id: Date.now().toString(), name: text }]); // Adiciona um novo item com um id único baseado no tempo
      setText(''); // Limpa o campo de texto depois de adicionar
    }
  };

  return (
    <ScrollView style={styles.container}>
      {' '}
      <View style={styles.header}>
        {' '}
        {/* Cabeçalho da aplicação */}
        <Image source={logoX} style={styles.image} /> {/* Imagem do logo */}
        <Text style={styles.title}>Exemplo de App React Native</Text>{' '}
        {/* Título do app */}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite algo" // Texto de dica para o usuário
        value={text} // O valor do TextInput é controlado pelo estado 'text'
        onChangeText={setText} // Sempre que o usuário digita, o valor do estado 'text' é atualizado
      />
      <Button title="Adicionar Item" onPress={addItem} />{' '}
      {/* Botão que chama a função addItem quando pressionado */}
      <FlatList
        data={items} // Passando a lista de itens para o FlatList
        renderItem={(
          { item } // Como cada item da lista será renderizado
        ) => (
          <View style={styles.item}>
            <Text>{item.name}</Text> {/* Exibindo o nome de cada item */}
          </View>
        )}
        keyExtractor={(item) => item.id} // Usando o id do item como chave única para o FlatList
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        {' '}
        {/* Botão customizado com TouchableOpacity */}
        <Text style={styles.buttonText}>Pressione-me</Text>{' '}
        {/* Texto dentro do botão */}
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App; // Exportando o App para que ele possa ser usado em outros lugares
