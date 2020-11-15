import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import io from 'socket.io-client';

const socket = io('http://192.168.1.7:3333');

interface Live {
  positionSlide: number;
  slides: string[];
  visible: boolean;
}

interface SocketContextData {
  contentLive: Live;
  visibility: boolean;
  numberSlideShow: number;
}

const SocketContext = createContext<SocketContextData>({ connection: socket });

export const SocketProvider: React.FC = ({ children }) => {
  const [contentLive, setContentLive] = useState<Live>({
    positionSlide: 0,
    slides: [],
    visible: false,
  });

  const [visibility, setVisibility] = useState(false);

  const [numberSlideShow, setNumberSlideShow] = useState(0);
  useEffect(() => {
    socket.on('update-content', function ({
      positionSlide,
      visible,
      slides,
    }: Live) {
      // if (data.slides.length > 0) {
      //   setSlideActive(data.positionSlide);
      //   setContentLive(data.slides);
      //   setVisibilityLive(data.visible);
      // }
      if (slides.length > 0) {
        setContentLive({
          positionSlide,
          slides,
          visible,
        });
      }
      console.log('updateContent');
    });

    socket.on('next-slide', function (nextSlideNumber: number) {
      console.log('recebi next', nextSlideNumber);
      // setSlideActive(nextSlideNumber);
      setNumberSlideShow(nextSlideNumber);
    });

    socket.on('visible-content', function (visibilityLive: boolean) {
      console.log('recebi visible', visibilityLive);
      setVisibility(visibilityLive);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ contentLive, visibility, numberSlideShow }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    Alert.alert('useSocket must be within an SocketProvider');
    throw Error('Failed');
  }

  return context;
}
