import React, { useState, useEffect } from 'react';
import { Button, View, Stylesheet } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
// Estado para armazenar o objeto de som carregado
const [sound, setSound] = useState(null);
// Estado para controlar se o som está tocando
const [isPlaying, setIsPlaying] = useState(false);
// Estado para controlar se o som esta em loop
const [isLooping, setIsLoop] = useState(false);

// Função assíncrona para carregar o arquivo de áudio
async function loadSound() {
  console.log('Carregando Som ... ');
  try {
    // Carrega o arquivo de audio 'assets/audio_exemplo.mp3'.
    // Certifique-se de que este arquivo exista na pasta 'assets' do seu projeto.
    const { sound } = await Audio. Sound. createAsync(
      require('./assets/560446music.mp3')
);
// Atualiza o estado 'sound' com o objeto de som carregado
      setSound(sound);
      console.log('Som Carregado');
    } catch (error) {
      console.error('Erro ao carregar o som:', error);
    }
  }

  async function playSound() {
    if(sound) {
      console.log('Tocando som...');
      try {
        //Inicia a reprodução do som
        await sound.playAsync();
        //Atualia o estado do 'isPlaying' paga true
        setIsPlaying(true);
      } catch(error) {
        console.error('Erro ao tocar o som: '. error);
      }
    }
  }
  async function pauseSound() {
    if (sound && isPlaying) {
      console.log('Pausando Som...');
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      }catch(error) {
        console.error('Erro ao pausar o som: '. error);
        
      }
    }
  }
}