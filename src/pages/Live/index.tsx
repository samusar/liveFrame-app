import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import api from '../../config/api';

import style from './styles';

interface ContentLive {
  id: number;
  content_id: number;
  description: string;
  order_number: number;
}

const Live: React.FC = () => {
  const navigation = useNavigation();
  const [contentLive, setContentLive] = useState<ContentLive[]>([]);
  const [slideLive, setSlideLIve] = useState(1);

  useEffect(() => {
    api.get('/')
  }, [])
  return (
    <ScrollView style={style.containerScroll}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color="#E3E3E3" size={30} style={{marginVertical: 15}} />  
        </TouchableOpacity>
        <View style={style.header}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
          <Text style={style.textHeaderBold}>
            Apresentação ao vivo:
          </Text>
          <Text style={style.textHeaderLight}></Text>
        </View>
      </View>
      <View style={style.previewContainer}>
        <View style={style.previewContent}>
          <Text style={style.textPreview}>
            {contentLive.find(content => (content.order_number === slideLive))?.description}
          </Text>
          <View style={style.bannerLive}>
            <Icon name='play' color='#BF1919' />
            <Text style={{fontFamily: 'Roboto_500Medium', color: '#BF1919'}}>
              Ao Vivo
            </Text>
          </View>
        </View>
        <Text style={style.textIndexHeader}>
          5 / 10
        </Text>
        <View style={style.containerOptions}>
          <TouchableOpacity>
            <View style={style.btPreview}>
              <Icon name='arrow-left' size={30} />
            </View>
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
                <Icon name='eye-off' size={40} color='#E3E3E3' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={style.btPreview}>
              <Icon name='arrow-right' size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={style.headerTable}>
          <Text style={[style.textTitleTable, {flex: 1}]}>
            Slides da transmição:
          </Text>
          <Text style={[style.textTitleTable, {marginHorizontal: 20}]}>
            Total: 5
          </Text>
        </View>
        <TouchableOpacity>
          <View style={style.containerItem}>
            <Text style={style.textIdItem}>
              1
            </Text>
            <Text style={style.textDescriptionItem}>
              Não compreendo os teus caminhos
            </Text>
            <View style={{marginRight: 20}}>
              <RadioButton
                value="first"
                status={ 'unchecked' }
                onPress={() => {}}
                color="#FF7A00"
                uncheckedColor="#A4A4A4"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Live;
