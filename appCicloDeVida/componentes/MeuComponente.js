import React, {Component} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class MeuComponente extends Component {
     constructor(props) {
        super(props);
        this.state = {mensagem: 'Olá!', contador: 0, exibirComponente: true};
        console.log('constructor: Componente montado!');
     }

     componentDidMount() {
        console.log('componentDidMount: Componente montado!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Componente atualizado:', prevState, this.state);
        
    }

    componentWillUnmount() {
        console.log('componentDidMount: Componente desmontado!');
        
    }

    alterarMensagem = () => {
        this.setState({ mensagem: 'Nova mensagem!!' });
    };
    
    incrementarContador = () => {
        this.setState({contador: this.state.contador + 1});
    };

    exibirOuOcultarComponente= () => {
        this.setState({ exibirComponente: !this.state.exibirComponente});
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.contador != nextState.contador) {
            console.log('shouldComponentUpdate:Contador mudou, renderizando');
            return true;
        }
        console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização ');
        return false;
    }

    render() {
        if (!this.state.exibirComponente) {
            console.log('render: para não renderizar se exibirComponente.');
            return null;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.mensagem}</Text>
                <Text style={styles.text}>Contador: {this.state.contador}</Text>
                <Button
                title='Alterar Mensagem'
                onPress={this.alterarMensagem}
                color="#4CAF50" // Cor verde para o botão
                style={styles.button}
                />
                <Button
                title='Incrementar Contador'
                onPress={this.incrementarContador}
                color="#FF9800" // Cor laranja para o botão
                style={styles.button}
                />
                <Button
                title='Exibir/Ocultar Componente'
                onPress={this.exibirOuOcultarComponente}
                color="#2196F3" // Cor azul para o botão
                style={styles.button}
                />
            </View>
        );
    }
}

 
const styles = StyleSheet.create ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0', // Cor de fundo leve
            padding: 20,
        },
        text: {
            fontSize: 18,
            marginBottom: 10,
            color: '#333', // Cor do texto
        },
        button: {
            backgroundColor: '#fff', // Cor de fundo do botão
            borderRadius: 30, 
            paddingVertical: 12, // Aumenta o espaçamento vertical
            paddingHorizontal: 20, // Aumenta o espaçamento horizontal
            marginBottom: 15, // Espaçamento entre os botões
            width: '80%', // Largura do botão, pode ajustar conforme necessário
            alignItems: 'center', // Alinha o texto no centro
            justifyContent: 'center', // Alinha o texto no centro
          },
    });
    
export default MeuComponente;
