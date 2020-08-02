import React from 'react';
import { View, Image } from 'react-native';

import Button from '../../components/Button';
import style from './styles';

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={style.header}>
        <Button text="TRANSMISSÃO" icon="monitor" />
        <Button style={{marginTop: 20}} text="EDITAR CONTEÚDO" icon="edit-2" />
      </View>
    </View>
  );
};

export default Home;
