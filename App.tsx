import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo';

import {Roboto_300Light, Roboto_500Medium, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';

import Home from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Home />
      <StatusBar backgroundColor="transparent" style="light" translucent />
    </>
  );
}
