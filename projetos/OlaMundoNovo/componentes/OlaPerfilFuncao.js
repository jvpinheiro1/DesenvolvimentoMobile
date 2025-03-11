import React from 'react';
import { Text, View } from 'react-native';

export default function OlaMundo(props) {
  return (
    <View>
      <Text>0lá, </Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Endereço: {props.endereco}</Text>
      <Text>Telefone: {props.telefone}</Text>
    </View>
  );
}
