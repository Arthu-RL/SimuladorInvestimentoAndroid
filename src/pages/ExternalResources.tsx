import React from 'react';
import { View, Alert, Linking } from 'react-native'
import { Header } from '@/components/ui/Header';
import { Button } from '../components/ui/Button'



export function ExternalResources() {

  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não é possível abrir este URL: ${url}`);
    }
  };
  
  return (
    <View className="flex-1 w-full bg-background">
      <Header title='Recursos Externos'/>

    </View>
  )
}
