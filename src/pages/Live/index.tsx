import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { useSocket } from '../../hooks/SocketContext';

import logoImg from '../../assets/logo.png';
import api from '../../config/api';

import style from './styles';

const Live: React.FC = () => {
  const navigation = useNavigation();
  const [contentLiveState, setContentLiveState] = useState<string[]>([]);
  const [slideActive, setSlideActive] = useState(0);
  const [visibilityLive, setVisibilityLive] = useState(false);

  const { contentLive, visibility, numberSlideShow } = useSocket();

  const alterSlide = useCallback(
    async (slideNumber: number) => {
      if (slideNumber >= 0 && slideNumber < contentLiveState.length) {
        await api.get(`/live/slide/${slideNumber}`);
      }
    },
    [contentLiveState],
  );

  const resetPresentation = useCallback(async () => {
    await api.get(`/live/slide/0`);
    await api.get(`/live?visibility=false`);
  }, []);

  const alterVisibility = useCallback(async visibilityParams => {
    await api.get(`/live?visibility=${visibilityParams}`);
  }, []);

  useEffect(() => {
    console.log('executei o effect');

    if (contentLive) {
      const slides = contentLive.slides.map(slide => {
        return slide.replace('<br />', '\n');
      });

      setContentLiveState(slides);
      setSlideActive(contentLive.positionSlide);
      setVisibilityLive(contentLive.visible);
    }

    return () => {
      resetPresentation();
    };
  }, [contentLive, resetPresentation]);

  useEffect(() => {
    setVisibilityLive(visibility);
  }, [visibility]);

  useEffect(() => {
    setSlideActive(numberSlideShow);
  }, [numberSlideShow]);

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
          <Image source={logoImg} />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}
        >
          <Text style={style.textHeaderBold}>Apresentação ao vivo:</Text>
          <Text style={style.textHeaderLight} />
        </View>
      </View>
      <View style={style.previewContainer}>
        <View style={style.previewContent}>
          <Text style={style.textPreview}>
            {contentLiveState[slideActive] && visibilityLive
              ? contentLiveState[slideActive]
              : ''}
          </Text>
          <View style={style.bannerLive}>
            <Icon name="play" color="#BF1919" />
            <Text style={{ fontFamily: 'Roboto_500Medium', color: '#BF1919' }}>
              Ao Vivo
            </Text>
          </View>
        </View>
        <Text style={style.textIndexHeader}>
          {slideActive + 1} /{contentLiveState.length}
        </Text>
        <View style={style.containerOptions}>
          <TouchableOpacity
            onPress={() => {
              alterSlide(slideActive - 1);
            }}
          >
            <View style={style.btPreview}>
              <Icon name="arrow-left" size={30} />
            </View>
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <TouchableOpacity
              onPress={() => alterVisibility(visibilityLive ? 'false' : 'true')}
            >
              <Icon
                name={visibilityLive ? 'eye' : 'eye-off'}
                size={40}
                color="#E3E3E3"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              alterSlide(slideActive + 1);
            }}
          >
            <View style={style.btPreview}>
              <Icon name="arrow-right" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={style.headerTable}>
          <Text style={[style.textTitleTable, { flex: 1 }]}>
            Slides da transmição:
          </Text>
          <Text style={[style.textTitleTable, { marginHorizontal: 20 }]}>
            Total: {contentLiveState.length}
          </Text>
        </View>
        {contentLiveState.map((slide, index) => (
          <TouchableOpacity key={index} onPress={() => alterSlide(index)}>
            <View style={style.containerItem}>
              <Text style={style.textIdItem}>{index + 1}</Text>
              <Text style={style.textDescriptionItem}>{slide}</Text>
              <View style={{ marginRight: 20 }}>
                <RadioButton
                  value={slide}
                  status={index === slideActive ? 'checked' : 'unchecked'}
                  onPress={() => alterSlide(index)}
                  color="#FF7A00"
                  uncheckedColor="#A4A4A4"
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Live;
