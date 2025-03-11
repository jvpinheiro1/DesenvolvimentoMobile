import React from 'react';
import { View, Text } from 'react-native';

export default class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View>
        <Text>Nome:{this.props.nome}</Text>
        <Text>Endereço:{this.props.endereco}</Text>
        <Text>Telefone:{this.props.telefone}</Text>
      </View>
    );
  }
}