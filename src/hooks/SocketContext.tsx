import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import io from 'socket.io-client';

const socket = io('http://192.168.1.9:3333');

interface Live {
  positionSlide: number;
  slides: string[];
  visible: boolean;
}

interface DataServer {
  positionSlide: string;
  slides: string[];
  visible: 'true' | 'false';
}

interface SocketContextData {
  contentLive: Live;
}

const SocketContext = createContext<SocketContextData>({ connection: socket });

export const SocketProvider: React.FC = ({ children }) => {
  const [contentLive, setContentLive] = useState<Live>({
    positionSlide: 0,
    slides: [],
    visible: false,
  });

  useEffect(() => {
    socket.on(
      'update-content',
      ({ positionSlide, visible, slides }: DataServer) => {
        setContentLive({
          positionSlide: Number(positionSlide),
          slides,
          visible: visible === 'true',
        });
        console.log('updateContent');
      },
    );

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ contentLive }}>
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
