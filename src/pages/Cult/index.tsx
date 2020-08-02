import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import style from './styles';

const Cult: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.containerScroll}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color="#E3E3E3" size={30} style={{marginVertical: 15}} />  
        </TouchableOpacity>
        <View style={style.header}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <Text style={style.textHeader}>
          Transmissão ao vivo
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View style={style.headerTable}>
          <Text style={[style.textTitleTable, {flex: 1}]}>
            Selecione o conteúdo para transmitir:
          </Text>
          <Text style={[style.textTitleTable, {marginHorizontal: 20}]}>
            Total: 5
          </Text>
        </View>
        <View style={style.containerItem}>
          <Text style={style.textIdItem}>
            1
          </Text>
          <TouchableOpacity 
            style={{flex: 1, height: 70, justifyContent: 'center'}}
            onPress={() => navigation.navigate('Live')}
          >
            <Text style={style.textDescriptionItem}>
              Vai valer a pena
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.textExcludeItem}>
              Excluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cult;
