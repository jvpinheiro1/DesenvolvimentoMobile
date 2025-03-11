import React from 'react';
import { Text, View } from 'react-native';

export default class OlaPerfilClasse extends React.Component {
  render() {
    return (
        <View>
          <Text>0lá, </Text>
          <Text>Nome:{this.props.nome}</Text>
          <Text>Endereço:{this.props.endereco}</Text>
          <Text>Telefone:{this.props.telefone}</Text>
        </View>
      );
  }
}
