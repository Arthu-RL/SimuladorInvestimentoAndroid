import React from 'react';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';


export const Chart = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Rentabilidade Semanal</CardTitle>
      <Feather name="activity" size={24} color="white" />
    </CardHeader>
    <CardContent>
      <Text className="text-4xl font-bold brightness-110 transition-all  text-foreground pb-2">
        R$ 0,00
      </Text>
    </CardContent>
    <CardFooter>
      <CardDescription>
        Rentabilidade acumulada nesta semana
      </CardDescription>
    </CardFooter>
    <View className="w-full lg:w-1/4">
      {/* <Chart/> */}
    </View>
    </Card>
  )
}