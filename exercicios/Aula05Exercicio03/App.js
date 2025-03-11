import React, { useState } from 'react'; // Importando o React e o useState pra controlar os estados
import {
  View, // Vai usar isso pra organizar os elementos na tela
  Text, // Exibe o texto na tela
  Image, // Exibe imagens, como o logo
  TextInput, // Campo de texto pra digitar coisas
  Button, // Botão simples
  TouchableOpacity, // Botão mais customizável
  ScrollView, // Permite rolar a tela se o conteúdo for grande
  FlatList, // Bom pra listas de itens, que vão ser renderizados de forma eficiente
  SectionList, // A mesma coisa do FlatList, mas com seções
  StyleSheet, // Para organizar os estilos de forma mais legal
} from 'react-native'; // Isso tudo é do React Native, né?

import logoX from './assets/NativeLogo.png'; // Importando uma imagem que tá lá na pasta assets

// Função principal do App
const App = () => {
  const [text, setText] = useState(''); // Cria um estado pra controlar o texto digitado no campo de input
  const [items, setItems] = useState([
    // Inicializando uma lista de itens com alguns exemplos
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Definindo algumas seções com itens pra usar no SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função que é chamada quando o botão "Clique Aqui" é pressionado
  const handlePress = () => {
    alert('Botão pressionado!'); // Exibe um alerta na tela
  };

  // Função pra adicionar novos itens na lista
  const addItem = () => {
    if (text.trim() !== '') {
      // Só vai adicionar se o texto não for vazio
      setItems([...items, { id: Date.now().toString(), name: text }]); // Adiciona um item com o texto
      setText(''); // Limpa o campo de texto depois
    }
  };

  return (
    <ScrollView style={styles.container}>
      {' '}
      {/* Aqui, tudo fica dentro de um ScrollView pra rolar */}
      <View style={styles.view}>
        {' '}
        {/* Organiza o logo e o título */}
        <Image source={logoX} style={styles.image} /> {/* Exibe o logo */}
        <Text style={styles.image}></Text>{' '}
        {/* Aqui parece que o estilo da imagem foi colocado por engano */}
      </View>
      <TextInput
        style={styles.TextInput} // Estilo do campo de texto
        placeholder="Digite algo" // Texto de dica pra pessoa saber o que fazer
        value={text} // O valor do TextInput é controlado pelo estado 'text'
        onChangeText={setText} // Toda vez que alguém digitar, o valor do estado 'text' muda
      />
      <Button title="Clique Aqui" onPress={handlePress} />{' '}
      {/* Botão que mostra um alerta */}
      <FlatList
        data={items} // Passando a lista de itens
        renderItem={(
          { item } // Como cada item vai ser mostrado na lista
        ) => (
          <View style={styles.TouchableOpacity}>
            <Text>{item.name}</Text> {/* Aqui mostra o nome do item */}
          </View>
        )}
        keyExtractor={(item) => item.id} // Usando o id como chave única pra cada item
      />
      <TouchableOpacity style={styles.TouchableOpacity} onPress={addItem}>
        {' '}
        {/* Botão customizado pra adicionar itens */}
        <Text style={styles.TouchableOpacityText}>Toque aqui</Text>{' '}
        {/* Texto no botão */}
      </TouchableOpacity>
      <SectionList
        sections={sections} // Aqui você usa uma lista com seções, cada uma tem um título e itens
        renderItem={({ item }) => <text>(item.name)</text>} // Tentando renderizar os itens, mas tem um erro de sintaxe, porque a tag <text> não existe no React Native (deve ser <Text>)
        renderSectionHeader={({ section: { title } }) => (
          <text style={styles.sectionHeader}>{title}</text> // Mesmo erro aqui, deve ser <Text> e não <text>
        )}
        keyExtractor={(item) => item.id.toString()} // Usando o id de cada item como chave única
      />
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  TouchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  TouchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App; // Exportando o App pra ser usado em outro lugar
