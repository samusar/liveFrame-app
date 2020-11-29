import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../config/api';

import style from './styles';

interface Content {
  id: number;
  title: string;
}

const SelectContent: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get<Content[]>('/content').then(response => {
      setContents(response.data);
    });
  }, []);

  const handleSetContentLive = useCallback(
    (id: number) => {
      const dataAdd = {
        contents: [id],
      };
      api.post(`/cult`, dataAdd).then(() => {
        navigation.navigate('Cult');
      });
    },
    [navigation],
  );

  return (
    <ScrollView style={style.containerScroll}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            color="#E3E3E3"
            size={30}
            style={{ marginVertical: 15 }}
          />
        </TouchableOpacity>
        <View style={style.header}>
          <Image source={require('../../assets/logo.png')} />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={style.headerTable}>
          <Text style={[style.textTitleTable, { flex: 1 }]}>
            Selecione o conteúdo para transmissão:
          </Text>
          <Text style={[style.textTitleTable, { marginHorizontal: 20 }]}>
            Total: {contents.length}
          </Text>
        </View>
        {contents.map(content => (
          <View key={content.id} style={style.containerItem}>
            <Text style={style.textIdItem}>{content.id}</Text>
            <TouchableOpacity
              style={{ flex: 1, height: 70, justifyContent: 'center' }}
              onPress={() => handleSetContentLive(content.id)}
            >
              <Text style={style.textDescriptionItem}>{content.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SelectContent;
