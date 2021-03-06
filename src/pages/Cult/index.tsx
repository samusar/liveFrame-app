import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../config/api';

import style from './styles';

interface Content {
  id: number;
  content_id: number;
  title: string;
}

const Cult: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      api.get<Content[]>('/cult').then(response => {
        setContents(response.data);
      });
    }, []),
  );

  const handleSetContentLive = (id: number) => {
    api.get(`/live/content/${id}`).then(() => {
      navigation.navigate('Live');
    });
  };

  const handleRemoveContentCult = useCallback(
    (id: number) => {
      api.delete(`/cult/${id}`).then(() => {
        const contentsFilters = contents.filter(content => content.id !== id);

        setContents(contentsFilters);
      });
    },
    [contents],
  );

  const handleAddContents = useCallback(() => {
    navigation.navigate('SelectContent');
  }, [navigation]);

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
        <Text style={style.textHeader}>Transmissão ao vivo</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={style.headerTable}>
          <Text style={[style.textTitleTable, { flex: 1 }]}>
            Selecione o conteúdo para transmitir:
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
              onPress={() => handleSetContentLive(content.content_id)}
            >
              <Text style={style.textDescriptionItem}>{content.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemoveContentCult(content.id)}
            >
              <Text style={style.textExcludeItem}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity
          onPress={handleAddContents}
          style={style.buttonAddContent}
        >
          <Text style={style.textButtonAddContent}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cult;
