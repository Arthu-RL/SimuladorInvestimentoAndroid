import React, { useCallback } from 'react';
import "./src/stylesheets/globals.css"
import { View, Text, StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Manrope_400Regular, Manrope_700Bold } from '@expo-google-fonts/manrope';

import { Routes } from '@/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    OpenSans_400Regular,
    OpenSans_700Bold,
    Manrope_400Regular,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Carregando</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="default"
        translucent
      />
      <Routes />
    </>
  );
}
