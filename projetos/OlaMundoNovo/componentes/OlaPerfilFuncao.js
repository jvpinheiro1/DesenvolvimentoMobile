import React from 'react';
import { Text, View } from 'react-native';

export default function OlaMundo(props) {
  return (
    <View>
      <Text>0lá, </Text>
      <Text>{props.nome}</Text>
      <Text>Endereço: {props.endereco}</Text>
      <Text>Telefone: {props.telefone}</Text>
      <Text></Text>
    </View>
  );
}
