import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import style from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={style.main}>
        <Button text="TRANSMISSÃO" onPress={() => navigation.navigate('Cult')} icon="monitor" />
        <Button text="EDITAR CONTEÚDO" onPress={() => {}} icon="edit-2" style={{marginTop: 20}} />
      </View>
    </View>
  );
};

export default Home;
