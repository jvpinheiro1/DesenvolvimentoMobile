import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  async function loadSound() {
    console.log('Carregando Som...');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/351372clang.mp3')
      );
      setSound(sound);
      console.log('Som Carregado');
    } catch (error) {
      console.error('Erro ao carregar o som:', error);
    }
  }

  async function playSound() {
    if (sound) {
      console.log('Tocando som...');
      try {
        await sound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao tocar o som:', error);
      }
    }
  }

  async function pauseSound() {
    if (sound && isPlaying) {
      console.log('Pausando Som...');
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error('Erro ao pausar o som:', error);
      }
    }
  }

  async function unloadSound() {
    if (sound) {
      console.log('Descarregando Som...');
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
        setIsLooping(false);
        console.log('Som Descarregado');
      } catch (error) {
        console.error('Erro ao descarregar o som:', error);
      }
    }
  }

  async function toggleLooping() {
    if (sound) {
      try {
        await sound.setIsLoopingAsync(!isLooping);
        setIsLooping(!isLooping);
        console.log('Looping:', !isLooping);
      } catch (error) {
        console.error('Erro ao definir o looping:', error);
      }
    }
  }

  useEffect(() => {
    loadSound();

    return () => {
      console.log('Desmontando componente, descarregando som...');
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={isPlaying ? 'Pausar som' : 'Tocar som'}
        onPress={isPlaying ? pauseSound : playSound}
        disabled={!sound}
      />
      <Button
        title={isLooping ? 'Desativar Loop' : 'Ativar Loop'}
        onPress={toggleLooping}
        disabled={!sound}
      />
      <Button
        title="Descarregar som"
        onPress={unloadSound}
        disabled={!sound}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
