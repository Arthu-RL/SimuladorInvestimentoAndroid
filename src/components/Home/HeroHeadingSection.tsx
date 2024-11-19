import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlipWords } from '../ui/FlipWords';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../ui/Button';

export const HeroHeadingSection = () => {
  const words = [
    'dinâmica',
    'intuitiva',
    'prática',
    'divertida',
    'inovadora',
    'eficaz',
    'empolgante',
    'engajadora',
    'realista',
    'gratificante',
    'inteligente',
  ];

  const navigation = useNavigation();

  return (
    <View className="bg-black flex flex-col gap-3 m-7">
      <Text className="text-foreground font-manrope text-5xl font-bold">
        Futuro Financeiro
      </Text>
      <View className="flex flex-col">
        <View className="w-full text-4xl font-normal">
          <Text className=" text-foreground text-3xl">Aprenda de maneira</Text>
          <FlipWords words={words}/>
          <Text className=" text-foreground text-3xl">e conquiste suas metas financeiras</Text>
        </View>
        <Text className="text-muted-foreground font-bold text-xl text-pretty font-manrope mb-2 mt-5">
          Bem-vindo ao Futuro Financeiro, uma plataforma interativa projetada para jovens que querem aprender sobre finanças e investimentos de maneira prática. Aqui, você encontrará um ambiente seguro para desenvolver habilidades financeiras essenciais e se preparar para tomar decisões inteligentes no futuro.
        </Text>
      </View>
      <View className="flex gap-2 max-xl:text-sm">
        <Button
          title='Saiba Mais'
          onPress={()=>{}}
          >
        </Button>
        <View className="flex justify-center text-center">
          <Button
            title='Experimente o Simulador'
            onPress={() => navigation.navigate('simulator')}
            />
            {/* <HeroGlobe/> */}
        </View>
      </View>
    </View>
  );
};